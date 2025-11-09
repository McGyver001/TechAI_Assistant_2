import React, { useState } from 'react';
import Chat from './components/Chat';
import Admin from './components/Admin';
import EfficiencySpark from './components/EfficiencySpark';

export default function App(){
  const [loggedIn, setLoggedIn] = useState(false);
  const [active, setActive] = useState('performance');
  const perf = {eff: 10.4, dollars: 65.20};

  if(!loggedIn){
    return (
      <div className="app-shell">
        <header className="header">
          <div className="logo">FORD</div>
          <div className="title">TechAI Assistant</div>
        </header>
        <div className="container">
          <div className="card">
            <h3>Login</h3>
            <input className="input" placeholder="FMCDealer.com Username" />
            <div style={{height:12}} />
            <button className="btn" onClick={()=>setLoggedIn(true)}>Log In</button>
          </div>

          <div className="card">
            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              <div className="big-button">📊 Performance Coaching</div>
              <div className="big-button">🔍 Search for Solutions</div>
              <div className="big-button">💵 Create Quote</div>
            </div>
          </div>

          <div className="card">
            <div className="small">Efficiency</div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>
                <div className="eff-large">{perf.eff}%</div>
                <div className="small">Dollars per hour</div>
                <div style={{fontWeight:700}}>${perf.dollars.toFixed(2)}</div>
              </div>
              <div><EfficiencySpark /></div>
            </div>
          </div>

        </div>
      </div>
    )
  }

  return (
    <div className="app-shell">
      <header className="header">
        <div className="logo">FORD</div>
        <div className="title">TechAI Assistant</div>
      </header>
      <div className="container">
        <div style={{display:'flex',gap:8,marginBottom:12}}>
          <div className="big-button" onClick={()=>setActive('performance')}>Performance</div>
          <div className="big-button" onClick={()=>setActive('diagnostics')}>Diagnostics</div>
          <div className="big-button" onClick={()=>setActive('resources')}>Resources</div>
          <div className="big-button" onClick={()=>setActive('multipoint')}>Multipoint</div>
        </div>

        {active==='performance' && (
          <div>
            <div className="card">
              <div className="small">Efficiency</div>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div>
                  <div className="eff-large">10.4%</div>
                  <div className="small">Dollars per hour</div>
                  <div style={{fontWeight:700}}>$65.20</div>
                </div>
                <div><EfficiencySpark /></div>
              </div>
            </div>
            <div className="card"><h3>Summary</h3><p className="small">Dollars billed, jobs completed, and targets.</p></div>
          </div>
        )}

        {active==='diagnostics' && <div className="card"><h3>Search</h3><p className="small">VIN, DTC, and service info.</p></div>}
        {active==='resources' && <div className="card"><h3>Repair Videos</h3><p className="small">Third-party repair videos and training.</p></div>}
        {active==='multipoint' && <div className="card"><h3>Multipoint Inspection</h3><p className="small">Checklist items.</p></div>}

        <div style={{marginTop:12}}><h4 style={{marginBottom:8}}>Assistant</h4><Chat /></div>
      </div>
      <div className="footer">TechAI Assistant</div>
      <div className="admin-link"><a href="#admin" onClick={(e)=>{e.preventDefault(); const code=prompt('Enter admin quick code'); if(code==='admin-secret') location.hash='admin'; }}>Admin</a></div>
      {location.hash==='admin' && <div style={{position:'fixed',top:40,left:10,right:10,zIndex:60}}><Admin /></div>}
    </div>
  )
}
