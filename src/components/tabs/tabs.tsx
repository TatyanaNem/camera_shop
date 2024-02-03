import { useEffect, useState } from 'react';
import { CameraCategory, CameraLevel, CameraType, DEFAULT_TAB, ProductTab } from '../../common/const';
import {DescriptionTab} from './description-tab/description-tab';
import {SpecificationsTab} from './specifications-tab/specifications-tab';
import { useSearchParams } from 'react-router-dom';

type TTabsProps = {
  vendorCode: string;
  category: CameraCategory;
  type: CameraType;
  level: CameraLevel;
  description: string;
}

export function Tabs ({vendorCode, category, type, level, description}: TTabsProps) {
  const tabs = [
    {
      title: ProductTab.Characteristic,
      content:
      <SpecificationsTab
        vendorCode={vendorCode}
        category={category}
        type={type}
        level={level}
      />
    },
    {
      title: ProductTab.Description,
      content:
      <DescriptionTab
        text={description}
      />
    }
  ];

  const [activeTab, setActiveTab] = useState(DEFAULT_TAB);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleActiveTabClick = (index: number) => {
    searchParams.set('tab', index.toString());
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (searchParams.size !== 0) {
      setActiveTab(Number(searchParams.get('tab')));
    } else {
      searchParams.set('tab', activeTab.toString());
      setSearchParams(searchParams, {replace: true});
    }
  }, [searchParams, activeTab, setSearchParams]);

  return (
    <div className="tabs product__tabs" data-testid='tabs'>
      <div className="tabs__controls product__tabs-controls">
        {
          tabs && tabs.length && tabs.map((tab, index) => (
            <button
              key={tab.title}
              data-testid={`tab-button-${index}`}
              className={index === activeTab ? 'tabs__control is-active' : 'tabs__control'}
              type="button"
              onClick={() => handleActiveTabClick(index)}
            >
              {tab.title}
            </button>
          ))
        }
      </div>
      <div className="tabs__content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}
