import React, {useEffect, useState} from "react";

import { useSelector } from 'react-redux';
import Snippets from "../../../../helpers/Snippets";

export const MenuFoodItems: React.FunctionComponent = (): any | null => {
    
    // @ts-ignore
    const menuCategories = useSelector(state => state.menu.value);
    
    const getMenuSlug: Function = (label: string): string => {
        
        return label.toString().replace(' ','-').toLowerCase();
        
    }
    
    useEffect(()=>{
        
        console.warn("::::: --- MENU --- :::::", menuCategories);
        
    },[menuCategories]);
    
    return (
        <>
    
            {menuCategories.products.map((category: any, categoryIndex: number) => (
            
            <div id={`section_${categoryIndex}_${category.category_slug}`} className="container menu-category" key={categoryIndex}>
                
                <div className={'menu-cat-banner'} style={{backgroundImage: `url(/assets/elements/banners/banner-${getMenuSlug(category.category_slug)}.svg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', minHeight: '250px'}}>
                    <img src={`/assets/elements/banners/txt-${getMenuSlug(category.category_slug)}.svg`} className="category-banner-text-icon" />

                    
                    <div className='row menu-foot-cats'>
                        {Snippets.objects.convertToArray(category.products).map((product:any, productIndex:number) => (
                            <div className="col-xl-4 col-md-6" >
                                <div className="card border-radius-zero border-0 shadow-sm mb-30" style={{backgroundImage: "url('/assets/bg/banners/food-card-top-wave.svg')", minHeight: '200px' }}>
                                    <div className="card-body">
                                        <h3 className="mb-3">{product[1].product_name}</h3>
                                        <p className="line-height-24" dangerouslySetInnerHTML={{__html: product[1].product_description}}></p>
                                        <div className="banner-strip-d-flex">
                                            <div className="price-text">
                                                {menuCategories.currency} ${menuCategories.currency === 'USD' ? product[1].gaap_forex_price : product[1].gaap_local_price}
                                            </div>
                                            <div>
                                                <img src={`/assets/elements/banners/food-card-hearts.svg`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                
                </div>
            
            </div>
            
            ))}
        
        </>
    
    );
    
};
