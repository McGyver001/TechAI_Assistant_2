import React, { useState, useRef, useEffect } from 'react';
export default function Chat(){ 
  const [messages, setMessages] = useState([{from:'bot',text:'Welcome to TechAI Assistant chat.'}]);
  const [input, setInput] = useState('');
  const boxRef = useRef();
  useEffect(()=>{ if(boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight },[messages]);
  function send(){ if(!input) return; setMessages([...messages,{from:'user',text:input}]); setInput(''); setTimeout(()=>setMessages(m=>[...m,{from:'bot',text:'(sample) This will connect to OpenAI once API key is set.'}]),600) }
  return (
    <div style={{borderRadius:10,overflow:'hidden',border:'1px solid #eef2f7',background:'#fff'}}>
      <div style={{padding:12,maxHeight:220,overflow:'auto'}} ref={boxRef}>
        {messages.map((m,i)=>(<div key={i} style={{display:'flex',justifyContent: m.from==='user'?'flex-end':'flex-start',marginBottom:8}}><div style={{padding:8,background:m.from==='user'?'#0B63D6':'#f1f5f9',color:m.from==='user'?'#fff':'#111827',borderRadius:12,maxWidth:'80%'}}>{m.text}</div></div>))}
      </div>
      <div style={{display:'flex',gap:8,padding:8,borderTop:'1px solid #eef2f7'}}>
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask a repair question..." style={{flex:1,padding:10,borderRadius:8,border:'1px solid #e6eef8'}} />
        <button className="big-button" onClick={send} style={{padding:'8px 12px'}}>Send</button>
      </div>
    </div>
  )
}
