import React from 'react'
import { Table } from "antd";

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Product",
        dataIndex: "product",
    },
    {
        title: "Status",
        dataIndex: "staus",
    },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
    data1.push({
        key: i,
        name: `Ann Gomez ${i}`,
        product: 32,
        staus: `Path Rd. no. ${i}, CA`,
    });
}

const Bloglist = () => {
    return (


        <div>
            <h3 className="mb-4 title">Blog List</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>

        </div>
    )
}

export default Bloglist