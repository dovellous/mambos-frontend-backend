import React from "react";
import {useSelector} from "react-redux";
import {BannerStrip} from "../layout/widgets/banners/BannerStrip";
import {MenuFoodItems} from "../layout/widgets/menu/MenuFoodItems";
import {MenuNavBar} from "../layout/widgets/menu/MenuNavBar";
import {MenuSlider} from "../layout/widgets/sliders/MenuSlider";

type PageProps = {
    children?: React.ReactNode;
}

const Promotions:React.FunctionComponent<PageProps> = ({ children, ...props}) : any | null => {

    // @ts-ignore
    const menuCategories = useSelector(state => state.menu.value);

    return (
        <>

            <img src={'https://pbs.twimg.com/media/FrQQEGvX0AIL-nz?format=jpg&name=large'} width={'100%'} />

        </>
    );

};

export default Promotions;