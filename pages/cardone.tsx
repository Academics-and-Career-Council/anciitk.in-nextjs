import React from 'react';
import Image from 'next/image';
import style from '../public/styles/myCards.module.css'

export default function myCard() {
    return (
        <div>
         <div className={style.masterCard}>
            
                <Image src="/image/aspect.jpg" width="300%" height="400%" className={style.imgComp}/>
            
                <h1>Abhinav Garg</h1>
         </div>
         </div>
    );
} 