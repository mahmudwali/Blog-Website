/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from './../Components/Loader';
import BlogList from './../Components/BlogList';
import Layout from './../Layout/Layout';
import { useState } from 'react';
import { useEffect } from 'react';
import { postByCategory } from '../APIRequest/APIRequest';

const PostByCategoryPage = () => {


    let{categoryID}=useParams();

    
    let[list, SetList]=useState(null);


    useEffect( ()=>{

        


        (async()=>{
           let res= await postByCategory(categoryID);
            SetList(res)
        })();


    },[categoryID])



    return (
        <Layout>
            
            
            {list===null?<Loader/>:<BlogList list={list}/>}
        </Layout>
    );
};

export default PostByCategoryPage;