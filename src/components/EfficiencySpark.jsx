import React, { useEffect, useState } from 'react';
export default function EfficiencySpark(){ 
  const [points, setPoints] = useState([10,20,30,40,55,60,70,75,80]);
  useEffect(()=>{
    const t = setInterval(()=>{
      setPoints(prev=>{ const next = Math.max(5, Math.min(100, prev[prev.length-1] + (Math.random()*6-3))); return [...prev.slice(1), Math.round(next)]; });
    }, 2000);
    return ()=>clearInterval(t);
  },[]);
  const w=140,h=60;
  const step = w/(points.length-1);
  const path = points.map((p,i)=> `${i===0?'M':'L'} ${i*step} ${h - (p/100)* (h-10)}`).join(' ');
  const fillPath = path + ` L ${w} ${h} L 0 ${h} Z`;
  return (<svg className="spark" viewBox={`0 0 ${w} ${h}`} xmlns="http://www.w3.org/2000/svg"><path d={fillPath} fill="rgba(0,200,120,0.08)" stroke="#00c878" strokeWidth="3" fillRule="nonzero" strokeLinecap="round" strokeLinejoin="round"/></svg>)
}
