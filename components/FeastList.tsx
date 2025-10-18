import React, { useState, useMemo, useEffect } from 'react';
import type { Feast, FeastType, MainSection, MultilingualString } from '../types';
import Pagination from './Pagination';

interface FeastListProps {
  feasts: Feast[];
  onSelectFeast: (feast: Feast) => void;
  feastTypes: FeastType[];
  getML: (textObj: MultilingualString | undefined) => string;
  mainSections: MainSection[];
  onSelectMainSection: (sectionId: string) => void;
  isAdmin: boolean;
  onAddNewFeast: () => void;
}

const FEASTS_PER_PAGE = 13;

const FeastList: React.FC<FeastListProps> = ({ feasts, onSelectFeast, feastTypes, getML, mainSections, onSelectMainSection, isAdmin, onAddNewFeast }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const languageCodeForDate = getML({vi: 'vi-VN', en: 'en-US'});

  const formatToMMDD = (date: Date) => {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${month}-${day}`;
  };

  const todayString = useMemo(() => formatToMMDD(new Date()), []);
  const tomorrowString = useMemo(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return formatToMMDD(tomorrow);
  }, []);

  const filteredFeasts = useMemo(() => {
    if (!searchTerm) return feasts;
    const lowercasedFilter = searchTerm.toLowerCase();
    return feasts.filter(feast => 
        Object.values(feast.title).some(t => t.toLowerCase().includes(lowercasedFilter)) ||
        (feast.subtitle && Object.values(feast.subtitle).some(s => s.toLowerCase().includes(lowercasedFilter)))
    );
  }, [feasts, searchTerm]);

  useEffect(() => {
    if (searchTerm) {
      setCurrentPage(1);
      return;
    };
    
    let targetFeastIndex = -1;

    // 1. Check for today's feast
    targetFeastIndex = filteredFeasts.findIndex(feast => feast.date === todayString);

    // 2. If no feast today, check for tomorrow's feast
    if (targetFeastIndex === -1) {
      targetFeastIndex = filteredFeasts.findIndex(feast => feast.date === tomorrowString);
    }

    // 3. If no feast for today or tomorrow, find the next upcoming feast
    if (targetFeastIndex === -1) {
      const nextUpcomingIndex = filteredFeasts.findIndex(feast => feast.date >= todayString);
      if (nextUpcomingIndex !== -1) {
        targetFeastIndex = nextUpcomingIndex;
      } else {
        if (filteredFeasts.length > 0) {
          targetFeastIndex = 0;
        }
      }
    }

    if (targetFeastIndex !== -1) {
      const pageOfTargetFeast = Math.floor(targetFeastIndex / FEASTS_PER_PAGE) + 1;
      setCurrentPage(pageOfTargetFeast);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const paginatedFeasts = useMemo(() => {
    const startIndex = (currentPage - 1) * FEASTS_PER_PAGE;
    return filteredFeasts.slice(startIndex, startIndex + FEASTS_PER_PAGE);
  }, [filteredFeasts, currentPage]);

  const totalPages = Math.ceil(filteredFeasts.length / FEASTS_PER_PAGE);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
      setCurrentPage(1); // Reset to first page on search
  };


  return (
    <div className="animate-fade-in">
        {mainSections && mainSections.length > 0 && (
            <div className="mb-8">
                <div className="flex items-center space-x-3 overflow-x-auto pb-4 -mx-4 px-4 main-sections-scrollbar-hide">
                    {mainSections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => onSelectMainSection(section.id)}
                            className="flex-shrink-0 whitespace-nowrap px-5 py-2 rounded-full bg-[var(--bg-secondary)] border border-[var(--bg-tertiary)] text-[var(--text-secondary)] font-semibold text-sm hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] hover:border-[var(--border-accent)]/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--border-accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]"
                        >
                            {getML(section.title)}
                        </button>
                    ))}
                </div>
            </div>
        )}

      {feasts.length > 0 && (
        <div className="sticky md:sticky top-[80px] z-[5] bg-[var(--bg-primary)] py-4 mb-6 -mx-4 px-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="fas fa-search text-[var(--text-secondary)]"></i>
                </div>
                <input
                  type="text"
                  placeholder={getML({ vi: "Tìm lễ...", en: "Search feasts..." })}
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--bg-tertiary)] rounded-lg shadow-sm py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-[var(--border-accent)] focus:border-[var(--border-accent)] transition-all duration-300"
                  aria-label={getML({ vi: "Tìm kiếm lễ", en: "Search for feasts" })}
                />
              </div>
               {isAdmin && (
                    <button
                        onClick={onAddNewFeast}
                        className="bg-blue-500/20 text-blue-300 px-4 py-3 rounded-lg hover:bg-blue-500/30 transition-colors duration-300 font-semibold flex items-center flex-shrink-0"
                    >
                        <i className="fas fa-plus mr-2"></i><span>{getML({ vi: 'Thêm Lễ', en: 'Add Feast' })}</span>
                    </button>
                )}
            </div>
        </div>
      )}

      {paginatedFeasts.length > 0 ? (
        <div className="space-y-3">
          {paginatedFeasts.map((feast) => {
            const isToday = feast.date === todayString;
            const isTomorrow = feast.date === tomorrowString;
            const feastTypeData = feastTypes.find(ft => ft.name.vi === feast.type);
            
            return (
              <div
                key={feast.id}
                onClick={() => onSelectFeast(feast)}
                className="group bg-[var(--bg-secondary)] rounded-lg p-4 flex items-center space-x-4 transition-all duration-300 border border-[var(--bg-tertiary)] hover:border-[var(--border-accent)] hover:shadow-lg hover:shadow-[var(--border-accent)]/10 cursor-pointer transform hover:-translate-y-0.5"
                role="button"
                aria-label={`${getML({ vi: 'Chọn', en: 'Select' })} ${getML(feast.title)}`}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-[var(--bg-tertiary)] flex flex-col items-center justify-center text-center transition-colors duration-300 group-hover:bg-[var(--highlight-bg)]">
                    <p className="text-2xl font-bold text-[var(--text-accent)]">{feast.date.split('-')[1]}</p>
                    <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase">{new Date(2000, parseInt(feast.date.split('-')[0]) - 1, 1).toLocaleString(languageCodeForDate, { month: 'short' })}</p>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">{getML(feast.title)}</h3>
                  {feast.subtitle && getML(feast.subtitle) && <p className="text-sm text-[var(--text-secondary)] italic">{getML(feast.subtitle)}</p>}
                   <div className="flex items-center flex-wrap gap-2 mt-2">
                      {isToday && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-red-500/80 border border-red-400 text-white animate-pulse">
                            {getML({ vi: 'HÔM NAY', en: 'TODAY' })}
                        </span>
                      )}
                      {isTomorrow && (
                          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500/80 border border-amber-400 text-white">
                              {getML({ vi: 'NGÀY MAI', en: 'TOMORROW' })}
                          </span>
                      )}
                      {feastTypeData && (
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--text-accent)]/10 text-[var(--text-accent)]">
                            {getML(feastTypeData.name)}
                        </span>
                      )}
                  </div>
                </div>
                
                 <div className="flex-shrink-0 self-center">
                    <i className="fas fa-chevron-right text-[var(--text-secondary)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--text-accent)]"></i>
                 </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <i className="fas fa-calendar-times fa-3x text-[var(--text-secondary)] mb-4"></i>
          <p className="text-[var(--text-secondary)]">
            {feasts.length > 0
              ? getML({ vi: 'Không tìm thấy lễ nào phù hợp.', en: 'No matching feasts found.' })
              : getML({ vi: 'Chưa có ngày lễ nào được thêm vào.', en: 'No feasts have been added yet.' })
            }
          </p>
        </div>
      )}
      
      {totalPages > 1 && (
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
      <style>{`
            .main-sections-scrollbar-hide::-webkit-scrollbar { display: none; }
            .main-sections-scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default FeastList;