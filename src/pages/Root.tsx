'use client'
import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import Login from '@/components/Login';
import Regsitration from '@/components/Regsitration';
import ButtonComponent from '@/common/components/ButtonComponent';

const Root: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="grid grid-cols-2 h-screen relative font-[rubik]">
      <div className='col-span-1 bg-[#cce4ff]'></div>
      <div className='col-span-1 bg-[#1f1f70]'></div>
      <div className='absolute grid grid-cols-2 w-[80vw] top-11 left-[10vw] h-[86vh] rounded-3xl shadow-md'>
        <div className='bg-white rounded-l-3xl'>
          <div className='flex justify-end w-full pe-10'>
            <ButtonComponent
             onClick={() => setActiveIndex(0)}
             label="Sign In"
             className={`px-6 py-2 rounded-b-md ${activeIndex === 0 ? 'bg-[#1f1f70] text-white' : ''}`}
            />
            <ButtonComponent
             onClick={() => setActiveIndex(1)}
             label="Register"
             className={`px-6 py-2 rounded-b-md ${activeIndex === 1 ? 'bg-[#1f1f70] text-white' : ''}`}
            />
          </div>
          <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
              <TabPanel>
                <Login/>
              </TabPanel>
              <TabPanel>
                <Regsitration/>
              </TabPanel>
          </TabView>
        </div>
        <div className='bg-[#cce4ff] rounded-r-3xl'>

        </div>
      </div>
    </div>
  )
}

export default Root;