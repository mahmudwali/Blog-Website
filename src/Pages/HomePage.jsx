import React, { useEffect, useState } from 'react';
import Layout from './../Layout/Layout';
import BlogList from './../Components/BlogList';
import { postLatest } from '../APIRequest/APIRequest';
import Loader from '../Components/Loader';

const HomePage = () => {

    let[list, SetList]=useState(null);


    useEffect( ()=>{

        


        (async()=>{
           let res= await postLatest();
            SetList(res)
        })();


    },[])



    return (
        <Layout>
            
            
            {list===null?<Loader/>:<BlogList list={list}/>}
        </Layout>
    );
};

export default HomePage;