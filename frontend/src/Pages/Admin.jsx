import React from 'react'
import SideAdminNav from '../Components/SideAdminNav'
import AddProductAdmin from '../Components/AddProductAdmin'
import ProductListAdmin from '../Components/ProductListAdmin'

const Admin = () => {
    return (
        <>
            <div className="w-full flex">
                <SideAdminNav />
                {/* <AddProductAdmin /> */}
                <ProductListAdmin />
            </div>
        </>
    )
}

export default Admin
