import React from "react";

function FilterView(filter){
    let filtersView = {
        'brand': [],
        'min_price': 0,
        'max_price': 100000000000,
        'sizes': [],
        'gender': '',
        'color': [],
    }

    const filters = {
        'brand': [],
        'min_price': 0,
        'max_price': 100000000000,
        'sizes': [],
        'gender': '',
        'color': [],
    }
    console.log("FilterView", filtersView);
    for (let i in filter['filter']){
        if (JSON.stringify(filter['filter'][i]) != JSON.stringify(filters[i])){
            filtersView[i].push(filter['filter'][i])
        }
    }
    return (
        <>
            Примененные фильтры: 
            {filtersView.map((item) => {
                return (
                    <div>
                        &nbsp;
                        {item}
                        </div>
                    );
            })}
        </>
        )

}

export default FilterView;