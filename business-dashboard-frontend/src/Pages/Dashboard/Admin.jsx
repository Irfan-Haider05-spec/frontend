import { Table } from 'antd'
import { FiDelete } from 'react-icons/fi';

const Admin = () => {

    const columns= [
        {
            title: "Serial No.",
            dataIndex: "index",
            key: "index",
            render: (_,_record, index) =><p>{index + 1}</p>
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: () =><p>{"Admin" + 1}</p>
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            render: () =><p>{"Admin" + 1}</p>
        },
        {
            title: "Admin Type",
            dataIndex: "type",
            key: "type",
            render: () =><p>{"Admin"}</p>
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: () => <FiDelete/>
        },
    ]
    return (
        <div>
            {/* header */}
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-xl font-semibold'>Admins</h1>
                <button className='bg-primary text-white h-10 px-4 rounded-md'>Add Admin</button>
            </div>

            {/* table container */}
            <Table columns={columns} pagination={false}/>
        </div>
    )
}

export default Admin