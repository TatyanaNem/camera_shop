import { useState } from 'react';
import { CameraCategory, CameraLevel, CameraType } from '../../common/const';
import DescriptionTab from './description-tab';
import SpecificationsTab from './specifications-tab';

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
      title: 'Характеристики',
      content:
      <SpecificationsTab
        vendorCode={vendorCode}
        category={category}
        type={type}
        level={level}
      />
    },
    {
      title: 'Описание',
      content:
      <DescriptionTab
        text={description}
      />
    }
  ];

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        {
          tabs && tabs.length && tabs.map((tab, index) => (
            <button
              key={tab.title}
              className={index === activeTab ? 'tabs__control is-active' : 'tabs__control'}
              type="button"
              onClick={() => setActiveTab(index)}
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
