import React, {useState} from "react";

type MenuNavBarProps = {
	menuCategories: any;
	children: React.ReactNode
}

export const MenuNavBar: React.FunctionComponent<MenuNavBarProps> = ({children, ...props}): any | null => {
	
	const {menuCategories} = props;
	
	console.warn("::::::: CATS :::::::", menuCategories);
	
	const scrollToMenuSection: Function = (menuItem: any, menuIndex: number): void => {
		
		alert(menuItem + "-" + menuIndex);
		
	}
	
	return (
		<>
			
			<section className="menu-nav-bar-wrapper">
				
				<div className={'menu-nav-bar-slider'}>
					
					<ul className='menu-nav-container'>
						{menuCategories.map((categoryItem: any, categoryItemIndex: number) => (
							<li className='menu-food-cat-item' key={categoryItemIndex}>
								<a href='#.' target='' onClick={(e) => {
									scrollToMenuSection(categoryItem, categoryItemIndex)
								}}>
									{categoryItem.category_name}
								</a>
							</li>
						))}
					</ul>
				
				</div>
			
			</section>
		
		</>
	
	);
	
};
