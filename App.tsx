import React, { useState, useEffect, useCallback, useMemo } from 'react';
import type { Feast, FeastType, SectionKey, MultilingualString, GenericContent, MainSection, LanguageConfig, SectionConfig, AboutContent } from './types';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import FeastList from './components/FeastList';
import FeastDetail from './components/FeastDetail';
import SectionView from './components/SectionView';
import GenericContentList from './components/PrayerList';
import GenericContentDetail from './components/PrayerDetail';
import AboutPage from './components/AboutPage';
import Spinner from './components/Spinner';
import ScrollToTopButton from './components/ScrollToTopButton';
import AdminLogin from './components/AdminLogin';
import AdminPanelModal from './components/AdminPanelModal';
import EditFeastModal from './components/EditFeastModal';
import EditSectionModal from './components/EditSectionModal';
import EditGenericContentModal from './components/EditPrayerModal';


// Data & Constants
import { FEASTS as initialFeasts } from './data';
import { SECTIONS_CONFIG } from './constants';
import { getMultilingualText as getMLText } from './utils/multilingual';

// Types to export
export type Theme = 'classic' | 'light' | 'dark' | 'black' | 'light-blue' | 'wood';
export type View = 'feastList' | 'feastDetail' | 'sectionView' | 'genericList' | 'genericDetail' | 'about';

export interface AppSettings {
  language: string; // current language code
  languages: LanguageConfig[];
  defaultLanguage: string;
  theme: Theme;
  fontSize: number;
  adminPassword?: string;
  footerContent: MultilingualString;
  feastTypes: FeastType[];
  mainSectionContents: Record<string, GenericContent[]>;
  logoUrl: string;
  headerTitle: MultilingualString;
  headerSubtitle: MultilingualString;
  mainSections: MainSection[];
  supportEmail: string;
  sectionsConfig: SectionConfig[];
  aboutContent: AboutContent;
}

const DEFAULT_SETTINGS: AppSettings = {
    language: 'vi',
    languages: [
      { code: 'vi', name: 'Tiếng Việt', enabled: true },
      { code: 'en', name: 'English', enabled: true },
      { code: 'es', name: 'Español', enabled: true },
      { code: 'fr', name: 'Français', enabled: true },
      { code: 'la', name: 'Latina', enabled: true },
    ],
    defaultLanguage: 'vi',
    theme: 'light',
    fontSize: 16,
    adminPassword: 'admin123',
    footerContent: { 
        vi: 'Nội dung được cung cấp cho mục đích phụng vụ và học hỏi. <br/> Mọi quyền được bảo lưu © 2024.',
        en: 'Content provided for liturgical and study purposes. <br/> All rights reserved © 2024.' 
    },
    feastTypes: [
        { name: { vi: 'Đại lễ', en: 'Solemnity' } },
        { name: { vi: 'Lễ kính', en: 'Feast' } },
        { name: { vi: 'Lễ nhớ', en: 'Memorial' } },
        { name: { vi: 'Kỷ niệm', en: 'Commemoration' } },
    ],
    mainSectionContents: {
        prayers: [],
    },
    logoUrl: 'https://i.imgur.com/gA3Q62z.jpg',
    headerTitle: { vi: 'Phụng Vụ Vinh Sơn', en: 'Vincentian Liturgy' },
    headerSubtitle: { vi: 'Nguồn tài liệu cho Tu sĩ và Giáo dân', en: 'Resources for Religious and Laity' },
    mainSections: [
      { id: 'prayers', title: { vi: 'Kinh Nguyện', en: 'Prayers' }, icon: 'fa-book-pray' }
    ],
    supportEmail: 'admin@example.com',
    sectionsConfig: SECTIONS_CONFIG,
    aboutContent: {
      title: { vi: 'Về Ứng Dụng', en: 'About The App' },
      p1: {
          vi: '<strong>Phụng Vụ Vinh Sơn</strong> là một ứng dụng web được thiết kế để cung cấp các bài đọc và tài liệu phụng vụ cho các ngày lễ trong lịch Vinh Sơn. Mục tiêu của chúng tôi là làm cho các nguồn tài liệu này dễ dàng truy cập cho các tu sĩ, giáo dân và tất cả những ai quan tâm đến linh đạo Vinh Sơn.',
          en: '<strong>Vincentian Liturgy</strong> is a web application designed to provide liturgical readings and materials for feast days in the Vincentian calendar. Our goal is to make these resources easily accessible to religious, laity, and all who are interested in Vincentian spirituality.'
      },
      p2_title: { vi: 'Ứng dụng này bao gồm:', en: 'This application features:' },
      li1: { vi: 'Tiểu sử các vị thánh Vinh Sơn.', en: 'Biographies of Vincentian saints.' },
      li2: { vi: 'Các bài đọc Thánh Lễ và Kinh Phụng Vụ cho các ngày lễ quan trọng.', en: 'Mass readings and Liturgy of the Hours for important feasts.' },
      li3: { vi: 'Giao diện đa ngôn ngữ để phục vụ cộng đồng rộng lớn hơn.', en: 'A multilingual interface to serve a wider community.' },
      li4: { vi: 'Các tùy chọn tùy chỉnh như thay đổi giao diện và cỡ chữ để có trải nghiệm đọc tốt nhất.', en: 'Customization options like theme and font size changes for the best reading experience.' },
      p3: {
          vi: 'Dự án này là một nỗ lực của tình yêu, được phát triển và duy trì bởi những người có lòng yêu mến di sản của Thánh Vinh Sơn Phaolô. Chúng tôi hy vọng bạn sẽ thấy nó hữu ích trong đời sống thiêng liêng của mình.',
          en: 'This project is a labor of love, developed and maintained by individuals passionate about the heritage of St. Vincent de Paul. We hope you find it useful in your spiritual life.'
      },
      p4: { vi: 'Mọi ý kiến đóng góp xin vui lòng liên hệ với ban quản trị.', en: 'For any feedback or suggestions, please contact the administration.' },
      go_back: { vi: 'Quay Về', en: 'Go Back' }
    },
};

const App: React.FC = () => {
  // State initialization with localStorage fallback
  const [isLoading, setIsLoading] = useState(true);
  const [settings, setSettings] = useState<AppSettings>(() => {
    try {
      const savedSettings = localStorage.getItem('appSettings');
      let parsed = savedSettings ? JSON.parse(savedSettings) : DEFAULT_SETTINGS;
      
      // Migration and validation
      if (!parsed.languages || parsed.languages.length === 0) {
        parsed.languages = DEFAULT_SETTINGS.languages;
      }
      // Migration for adding 'enabled' flag
      if (parsed.languages.some((l: any) => l.enabled === undefined)) {
        parsed.languages = parsed.languages.map((l: any) => ({ ...l, enabled: true }));
      }

      if (!parsed.defaultLanguage) {
        parsed.defaultLanguage = DEFAULT_SETTINGS.defaultLanguage;
      }
      if (!parsed.languages.some((l: LanguageConfig) => l.code === parsed.language)) {
        parsed.language = parsed.defaultLanguage;
      }

      if (parsed.prayers && !parsed.mainSectionContents) {
          parsed.mainSectionContents = { 'prayers': parsed.prayers };
          delete parsed.prayers;
      } else if (!parsed.mainSectionContents) {
          parsed.mainSectionContents = {};
      }

      if (parsed.mainSections) {
        for (const section of parsed.mainSections) {
          if (!parsed.mainSectionContents[section.id]) {
            parsed.mainSectionContents[section.id] = [];
          }
        }
      }
      if (!parsed.supportEmail) {
        parsed.supportEmail = DEFAULT_SETTINGS.supportEmail;
      }
      
      // Migration to remove color from feast types
      if (parsed.feastTypes && parsed.feastTypes.some((ft: any) => ft.color)) {
        parsed.feastTypes = parsed.feastTypes.map((ft: any) => ({ name: ft.name }));
      }
      
      if (!parsed.sectionsConfig) {
        parsed.sectionsConfig = DEFAULT_SETTINGS.sectionsConfig;
      }
      
      if (!parsed.aboutContent) {
        parsed.aboutContent = DEFAULT_SETTINGS.aboutContent;
      }


      return parsed;

    } catch (error) {
      console.error("Failed to parse settings from localStorage", error);
      return DEFAULT_SETTINGS;
    }
  });

  const [feasts, setFeasts] = useState<Feast[]>(() => {
    try {
        const savedFeasts = localStorage.getItem('feasts');
        return savedFeasts ? JSON.parse(savedFeasts) : initialFeasts;
    } catch (error) {
        console.error("Failed to parse feasts from localStorage", error);
        return initialFeasts;
    }
  });

  const [view, setView] = useState<View>('feastList');
  const [history, setHistory] = useState<({ view: View; feast?: Feast; sectionKey?: SectionKey, mainSectionId?: string, genericContent?: GenericContent })[]>([]);

  const [selectedFeast, setSelectedFeast] = useState<Feast | null>(null);
  const [selectedSectionKey, setSelectedSectionKey] = useState<SectionKey | null>(null);
  const [selectedMainSectionId, setSelectedMainSectionId] = useState<string | null>(null);
  const [selectedGenericContent, setSelectedGenericContent] = useState<GenericContent | null>(null);
  
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showEditFeast, setShowEditFeast] = useState(false);
  const [editingFeast, setEditingFeast] = useState<Partial<Feast> | null>(null);
  const [showEditSection, setShowEditSection] = useState(false);
  const [showEditGenericContentModal, setShowEditGenericContentModal] = useState(false);
  const [editingGenericContent, setEditingGenericContent] = useState<Partial<GenericContent> | null>(null);
  
  const getML = useCallback((textObj: MultilingualString | undefined) => {
    return getMLText(textObj, settings.language, settings.defaultLanguage);
  }, [settings.language, settings.defaultLanguage]);


  // Effects for persistence and theme application
  useEffect(() => {
    localStorage.setItem('appSettings', JSON.stringify(settings));
    document.body.className = `theme-${settings.theme}`;
    document.documentElement.lang = settings.language;
    setIsLoading(false);
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('feasts', JSON.stringify(feasts));
  }, [feasts]);

  const navigate = useCallback((newView: View, data: { feast?: Feast, sectionKey?: SectionKey, mainSectionId?: string, genericContent?: GenericContent } = {}) => {
      setHistory(prev => [...prev, { 
        view, 
        feast: selectedFeast || undefined, 
        sectionKey: selectedSectionKey || undefined, 
        mainSectionId: selectedMainSectionId || undefined,
        genericContent: selectedGenericContent || undefined,
      }]);
      setView(newView);
      if (data.feast !== undefined) setSelectedFeast(data.feast);
      if (data.sectionKey !== undefined) setSelectedSectionKey(data.sectionKey);
      if (data.mainSectionId !== undefined) setSelectedMainSectionId(data.mainSectionId);
      if (data.genericContent !== undefined) setSelectedGenericContent(data.genericContent);
      window.scrollTo(0, 0);
  }, [view, selectedFeast, selectedSectionKey, selectedMainSectionId, selectedGenericContent]);

  const handleGoBack = () => {
    if (view === 'feastList') return; // Cannot go back from the main list

    const previousState = history.pop();
    if (previousState) {
        setView(previousState.view);
        setSelectedFeast(previousState.feast || null);
        setSelectedSectionKey(previousState.sectionKey || null);
        setSelectedMainSectionId(previousState.mainSectionId || null);
        setSelectedGenericContent(previousState.genericContent || null);
        setHistory([...history]);
    } else {
        setView('feastList');
        setSelectedFeast(null);
        setSelectedSectionKey(null);
        setSelectedMainSectionId(null);
        setSelectedGenericContent(null);
    }
    window.scrollTo(0, 0);
  };
  
  const handleTitleClick = () => {
    setView('feastList');
    setSelectedFeast(null);
    setSelectedSectionKey(null);
    setSelectedMainSectionId(null);
    setSelectedGenericContent(null);
    setHistory([]);
    window.scrollTo(0, 0);
  };
  
  // Handlers for navigation
  const handleSelectFeast = (feast: Feast) => navigate('feastDetail', { feast });
  const handleSelectSection = (sectionKey: SectionKey) => navigate('sectionView', { feast: selectedFeast!, sectionKey: sectionKey });
  const handleSelectMainSection = (sectionId: string) => navigate('genericList', { mainSectionId: sectionId });
  const handleSelectGenericContent = (item: GenericContent) => navigate('genericDetail', { genericContent: item });
  

  const handleLanguageChange = (langCode: string) => setSettings(s => ({ ...s, language: langCode }));
  const handleThemeChange = (theme: Theme) => setSettings(s => ({ ...s, theme }));
  const handleFontSizeChange = (newSize: number) => setSettings(s => ({ ...s, fontSize: newSize }));
  const handleLoginAttempt = (password: string) => {
    if (password === settings.adminPassword) {
      setIsAdmin(true);
      setShowAdminLogin(false);
      return true;
    }
    return false;
  };
  
  const handleSaveSettings = (newSettings: Partial<AppSettings>) => {
    setSettings(s => {
      const combinedSettings = { ...s, ...newSettings };
  
      if (newSettings.mainSections) {
        const newContents = { ...combinedSettings.mainSectionContents };
        let hasChanges = false;
        
        newSettings.mainSections.forEach(section => {
          if (!newContents[section.id]) {
            newContents[section.id] = [];
            hasChanges = true;
          }
        });
  
        if (hasChanges) {
          combinedSettings.mainSectionContents = newContents;
        }
      }
      
      return combinedSettings;
    });
    setShowAdminPanel(false);
  };

  const handleAddNewFeast = () => {
    setEditingFeast({});
    setShowEditFeast(true);
  };

  const handleSaveFeast = (feastToSave: Feast) => {
    const feastExists = feasts.some(f => f.id === feastToSave.id);
    if (feastExists) {
      setFeasts(feasts.map(f => f.id === feastToSave.id ? feastToSave : f));
      if (selectedFeast?.id === feastToSave.id) {
          setSelectedFeast(feastToSave);
      }
    } else {
      setFeasts([...feasts, feastToSave].sort((a,b) => a.date.localeCompare(b.date)));
    }
    setShowEditFeast(false);
    setEditingFeast(null);
  };

  const handleDeleteFeast = () => {
    if (!selectedFeast) return;
    const feastTitle = getML(selectedFeast.title)
    const confirmMsg = getML({
      vi: `Bạn có chắc muốn xóa "${feastTitle}" không?`,
      en: `Are you sure you want to delete "${feastTitle}"?`
    });

    if (window.confirm(confirmMsg)) {
        setFeasts(feasts.filter(f => f.id !== selectedFeast.id));
        handleTitleClick(); // Go back to home
    }
  };

  const handleSaveSection = (newContent: MultilingualString) => {
    if (!selectedFeast || !selectedSectionKey) return;
    const updatedFeast = {
        ...selectedFeast,
        sections: {
            ...selectedFeast.sections,
            [selectedSectionKey]: newContent,
        }
    };
    setSelectedFeast(updatedFeast);
    setFeasts(feasts.map(f => f.id === updatedFeast.id ? updatedFeast : f));
    setShowEditSection(false);
  };
  
  const handleAddNewGenericContent = () => {
    if (!selectedMainSectionId) return;
    setEditingGenericContent({});
    setShowEditGenericContentModal(true);
  };

  const handleSaveGenericContent = (savedContent: GenericContent) => {
    if (!selectedMainSectionId) return;
    const currentContentList = settings.mainSectionContents[selectedMainSectionId] || [];
    const contentExists = currentContentList.some(p => p.id === savedContent.id);
    let updatedContent;
    if (contentExists) {
      updatedContent = currentContentList.map(p => (p.id === savedContent.id ? savedContent : p));
    } else {
      updatedContent = [...currentContentList, savedContent];
    }
    setSettings(s => ({ 
      ...s, 
      mainSectionContents: {
        ...s.mainSectionContents,
        [selectedMainSectionId]: updatedContent,
      } 
    }));
    setShowEditGenericContentModal(false);
    setEditingGenericContent(null);
  };

  const handleDeleteGenericContent = () => {
    if (!selectedGenericContent || !selectedMainSectionId) return;
    const itemTitle = getML(selectedGenericContent.title);
    const confirmMsg = getML({
      vi: `Bạn có chắc muốn xóa mục "${itemTitle}" không?`,
      en: `Are you sure you want to delete the item "${itemTitle}"?`,
    });

    if (window.confirm(confirmMsg)) {
        const updatedContent = settings.mainSectionContents[selectedMainSectionId].filter(p => p.id !== selectedGenericContent.id);
        setSettings(s => ({
          ...s,
          mainSectionContents: {
            ...s.mainSectionContents,
            [selectedMainSectionId]: updatedContent
          }
        }));
        handleGoBack();
    }
  };

  const getSectionTitle = (sectionKey: SectionKey): MultilingualString => {
      const config = settings.sectionsConfig.find(c => c.key === sectionKey);
      return config ? config.title : { vi: 'Không rõ', en: 'Unknown' };
  };

  const sortedFeasts = useMemo(() => {
    return [...feasts].sort((a, b) => {
        const dateA = a.date.replace('-', '');
        const dateB = b.date.replace('-', '');
        return dateA.localeCompare(dateB);
    });
  }, [feasts]);
  
  const currentSectionIndex = useMemo(() => {
    if (!selectedFeast || !selectedSectionKey) return -1;
    return settings.sectionsConfig.findIndex(s => s.key === selectedSectionKey);
  }, [selectedFeast, selectedSectionKey, settings.sectionsConfig]);
  
  const currentGenericContentIndex = useMemo(() => {
    if (!selectedGenericContent || !selectedMainSectionId) return -1;
    const contentList = settings.mainSectionContents[selectedMainSectionId] || [];
    return contentList.findIndex(p => p.id === selectedGenericContent.id);
  }, [selectedGenericContent, selectedMainSectionId, settings.mainSectionContents]);
  
  const handleNavigateSection = (direction: 'prev' | 'next') => {
      if (currentSectionIndex === -1 || !selectedFeast) return;
      const step = direction === 'prev' ? -1 : 1;
      let nextIndex = currentSectionIndex + step;
      while (nextIndex >= 0 && nextIndex < settings.sectionsConfig.length) {
          const nextSectionKey = settings.sectionsConfig[nextIndex].key;
          const hasContent = selectedFeast.sections[nextSectionKey] && 
                             (getMLText(selectedFeast.sections[nextSectionKey], settings.language, settings.defaultLanguage).trim() !== '');
          if (hasContent) {
              setSelectedSectionKey(nextSectionKey);
              return;
          }
          nextIndex += step;
      }
  };

  const handleNavigateGenericContent = (direction: 'prev' | 'next') => {
    if (currentGenericContentIndex === -1 || !selectedMainSectionId) return;
    const contentList = settings.mainSectionContents[selectedMainSectionId] || [];
    const nextIndex = direction === 'prev' ? currentGenericContentIndex - 1 : currentGenericContentIndex + 1;
    if (nextIndex >= 0 && nextIndex < contentList.length) {
        setSelectedGenericContent(contentList[nextIndex]);
    }
  };

  const canNavigateSection = (direction: 'prev' | 'next'): boolean => {
      if (currentSectionIndex === -1 || !selectedFeast) return false;
      const step = direction === 'prev' ? -1 : 1;
      let nextIndex = currentSectionIndex + step;
      while(nextIndex >= 0 && nextIndex < settings.sectionsConfig.length) {
          const key = settings.sectionsConfig[nextIndex].key;
          const hasContent = selectedFeast.sections[key] && (getMLText(selectedFeast.sections[key], settings.language, settings.defaultLanguage).trim() !== '');
          if(hasContent) return true;
          nextIndex += step;
      }
      return false;
  };
  
  const canNavigateGenericContent = (direction: 'prev' | 'next'): boolean => {
      if (currentGenericContentIndex === -1 || !selectedMainSectionId) return false;
      const contentList = settings.mainSectionContents[selectedMainSectionId] || [];
      const nextIndex = direction === 'prev' ? currentGenericContentIndex - 1 : currentGenericContentIndex + 1;
      return nextIndex >= 0 && nextIndex < contentList.length;
  };

  if (isLoading) {
    return <Spinner />;
  }

  const renderContent = () => {
    switch (view) {
      case 'feastDetail':
        return selectedFeast && <FeastDetail 
          feast={selectedFeast} 
          onSelectSection={handleSelectSection}
          isAdmin={isAdmin}
          onEditFeast={() => { setEditingFeast(selectedFeast); setShowEditFeast(true); }}
          onDeleteFeast={handleDeleteFeast}
          getML={getML}
          getSectionTitle={getSectionTitle}
          sectionsConfig={settings.sectionsConfig}
        />;
      case 'sectionView':
        return selectedFeast && selectedSectionKey && <SectionView
            feastTitle={getML(selectedFeast.title)}
            sectionTitle={getML(getSectionTitle(selectedSectionKey))}
            content={getML(selectedFeast.sections[selectedSectionKey]) || ''}
            isAdmin={isAdmin}
            onEdit={() => setShowEditSection(true)}
            getML={getML}
            fontSize={settings.fontSize}
            onFontSizeChange={handleFontSizeChange}
            onNavigateSection={handleNavigateSection}
            canNavigatePrev={canNavigateSection('prev')}
            canNavigateNext={canNavigateSection('next')}
        />;
      case 'genericList':
        return selectedMainSectionId && <GenericContentList 
          items={settings.mainSectionContents[selectedMainSectionId] || []} 
          onSelectItem={handleSelectGenericContent} 
          getML={getML}
          isAdmin={isAdmin}
          onAddNew={handleAddNewGenericContent}
          title={settings.mainSections.find(s => s.id === selectedMainSectionId)?.title || {vi: 'Danh Sách', en: 'List'}}
        />;
      case 'genericDetail':
        return selectedGenericContent && <GenericContentDetail
          item={selectedGenericContent}
          isAdmin={isAdmin}
          onEdit={() => {
            setEditingGenericContent(selectedGenericContent);
            setShowEditGenericContentModal(true);
          }}
          onDelete={handleDeleteGenericContent}
          getML={getML}
          fontSize={settings.fontSize}
          onFontSizeChange={handleFontSizeChange}
          onNavigateItem={handleNavigateGenericContent}
          canNavigatePrev={canNavigateGenericContent('prev')}
          canNavigateNext={canNavigateGenericContent('next')}
          />;
      case 'about':
        return <AboutPage 
            onGoBack={handleGoBack} 
            language={settings.language} 
            defaultLanguage={settings.defaultLanguage}
            content={settings.aboutContent}
        />;
      case 'feastList':
      default:
        return <FeastList
          feasts={sortedFeasts}
          onSelectFeast={handleSelectFeast}
          feastTypes={settings.feastTypes}
          getML={getML}
          mainSections={settings.mainSections}
          onSelectMainSection={handleSelectMainSection}
          isAdmin={isAdmin}
          onAddNewFeast={handleAddNewFeast}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans flex flex-col items-center">
      <Header
        onGoBack={handleGoBack}
        showBackButton={view !== 'feastList'}
        currentLanguage={settings.language}
        languages={settings.languages.filter(l => l.enabled)}
        defaultLanguage={settings.defaultLanguage}
        onLanguageChange={handleLanguageChange}
        onThemeChange={handleThemeChange}
        currentTheme={settings.theme}
        onAdminClick={() => isAdmin ? setShowAdminPanel(true) : setShowAdminLogin(true)}
        isAdmin={isAdmin}
        logoUrl={settings.logoUrl}
        title={settings.headerTitle}
        subtitle={settings.headerSubtitle}
        onTitleClick={handleTitleClick}
        onAboutClick={() => navigate('about')}
      />
      <main className="w-full max-w-4xl mx-auto p-4 flex-grow container">
        {renderContent()}
      </main>
      <Footer content={getML(settings.footerContent)} />
      <ScrollToTopButton />

      {/* Modals */}
      {showAdminLogin && <AdminLogin onClose={() => setShowAdminLogin(false)} onLoginAttempt={handleLoginAttempt} getML={getML} supportEmail={settings.supportEmail} />}
      {isAdmin && showAdminPanel && <AdminPanelModal onClose={() => setShowAdminPanel(false)} onSave={handleSaveSettings} currentSettings={settings} />}
      {isAdmin && showEditFeast && <EditFeastModal feast={editingFeast} onClose={() => { setShowEditFeast(false); setEditingFeast(null); }} onSave={handleSaveFeast} feastTypes={settings.feastTypes} languages={settings.languages} sectionsConfig={settings.sectionsConfig} />}
      {isAdmin && showEditSection && selectedFeast && selectedSectionKey && (
        <EditSectionModal 
          title={getSectionTitle(selectedSectionKey)}
          content={selectedFeast.sections[selectedSectionKey]!}
          onClose={() => setShowEditSection(false)}
          onSave={handleSaveSection}
          languages={settings.languages}
        />
      )}
      {isAdmin && showEditGenericContentModal && (
        <EditGenericContentModal 
            item={editingGenericContent} 
            onClose={() => { setShowEditGenericContentModal(false); setEditingGenericContent(null); }} 
            onSave={handleSaveGenericContent} 
            title={getML(settings.mainSections.find(s => s.id === selectedMainSectionId)?.title) || ''}
            languages={settings.languages}
        />
      )}
    </div>
  );
};

export default App;