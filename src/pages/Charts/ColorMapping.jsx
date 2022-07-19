import React from 'react';
import { ChartComponent, SeriesCollectionDirective,
SeriesDirective, Inject, ColumnSeries, Category,
Tooltip, Legend, RangeColorSettingDirective, RangeColorSettingsDirective } from 
'@syncfusion/ej2-react-charts';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';
import { colorMappingData, ColorMappingPrimaryYAxis,
ColorMappingPrimaryXAxis, rangeColorMapping  } from 
'../../data/dummy';


const ColorMapping = () => {
  const {currentMode} = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white
    dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category="Color Mapping"
       title="USA CLIMATE - WEATHER BY MONTH"/>
    <ChartComponent
    id="color-mapping-chart"
    primaryXAxis={ColorMappingPrimaryXAxis}
    primaryYAxis={ColorMappingPrimaryYAxis}
    chartArea={{border: {width:0}}}
    legendSettings={{ mode:'Range', background:'white'}}
    tooltip={{enable:true}}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[ColumnSeries, Tooltip, 
        Category, Legend]}/>
      <SeriesCollectionDirective>
        <SeriesDirective 
          dataSource={colorMappingData[0]}
          name="USA"
          xName='x'
          yName='y'
          type='Column'
          cornerRadius={{
            topLeft: 10,
            topRight: 10
          }}
        />
      </SeriesCollectionDirective>
        <RangeColorSettingsDirective>
          {rangeColorMapping.map((item, index) => 
          <RangeColorSettingDirective key={index} {...item}/>)}    
        </RangeColorSettingsDirective>    
    </ChartComponent>
    </div>
  )
}

export default ColorMapping