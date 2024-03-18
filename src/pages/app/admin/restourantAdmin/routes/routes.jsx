import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemList from '../category/list'
import { Costumer, OrderList } from '../category'
import ResPayMain from '../../../homeRestaurant/restourantPayment/payMain'
import { ResourantProfile } from '../../retourantAdmin/Profile'
import { ResProfileAnally } from '../../../restourant/profile/analthy'

export default function RestourantAdmin() {
    return (
        <>
            <Routes>
                <Route path="/restourant-itemlist" Component={ItemList} />
                <Route path="/restourant-orderlist" Component={OrderList} />
                <Route path="/restourant-customer" Component={Costumer} />
                <Route path="/restourant-payment" Component={ResPayMain} />
                <Route path="/restourant-profile" Component={ResourantProfile} />
                <Route path="/restourant-analytics" Component={ResProfileAnally} />
            </Routes>
        </>
    )
}
