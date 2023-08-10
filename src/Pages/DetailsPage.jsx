import React, { useEffect, useState } from 'react';
import Layout from './../Layout/Layout';
import { postDetails } from '../APIRequest/APIRequest';
import { useParams } from 'react-router-dom';
import Loader from './../Components/Loader';
import BlogDetails from '../Components/BlogDetails';


const DetailsPage = () => {



        let{detailsID}=useParams();
    
        
        let[list, SetList]=useState(null);
    
    
        useEffect( ()=>{
    
            
    
    
            (async()=>{
               let res= await postDetails(detailsID);
                SetList(res)
            })();
    
    
        },[detailsID])
    
    
    
        return (
            <Layout>
                
                
                {list===null?<Loader/>:<BlogDetails list={list}/>}
            </Layout>
    );
};

export default DetailsPage;