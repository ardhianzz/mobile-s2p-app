import { StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Loading from './loading'
import Home from './Home'
import SppdAdd0 from './SppdAdd0'
import SppdAdd1Keberangkatan from './SppdAdd1Keberangkatan'
import SppdAdd2Penginapan from './SppdAdd2Penginapan'
import SppdAdd3Kepulangan from './SppdAdd3Kepulangan'
import SppdAdd4Review from './SppdAdd4Review'


const index = () => {
const [sppdPage, setSppdPage] = useState("home");
const [loading, setLoading] = useState(true);
const [goTo, setGoTo] = useState("");




useEffect(()=> {
    setLoading(true);
    setGoTo("");

    setTimeout(()=> {
        setGoTo(sppdPage);
        setLoading(false);
    }, 300);
}, [sppdPage]);
  
return (
    <>
    {loading && <Loading />}
    {goTo == "home" && <Home setSppdPage={setSppdPage}/>}
    {goTo == "Sppd Pengajuan" && <SppdAdd0 setSppdPage={setSppdPage}/>}
    {goTo == "SppdAdd1Keberangkatan" && <SppdAdd1Keberangkatan setSppdPage={setSppdPage}/>}
    {goTo == "SppdAdd2Penginapan" && <SppdAdd2Penginapan setSppdPage={setSppdPage}/>}
    {goTo == "SppdAdd3Kepulangan" && <SppdAdd3Kepulangan setSppdPage={setSppdPage}/>}
    {goTo == "SppdAdd4Review" && <SppdAdd4Review setSppdPage={setSppdPage}/>}
    </>
  )
}

export default index

const styles = StyleSheet.create({})