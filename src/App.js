import React, { useState } from 'react'
import Styles from './App.module.css'
import Main from "./components/Main/Main"
import Sidebar from "./components/Sidebar/Sidebar"

const App = () => {
	const [data, setData] = useState(["42.8765615", "74.6070079"])
	return (
		<div className={Styles.app}>
			<Main data={data} />
			<Sidebar passData={setData} />
		</div>
	)
}

export default App
