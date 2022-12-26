import React from "react"
import { Table } from "antd"
import { table_wrapper, table_heading } from "./index.module.less"

const AdminTable = ({ heading, columns, data, onAdd }) => {
  return (
    <section className={`${table_wrapper}`}>
      <div className={`${table_heading}`}>
        <p>{heading}</p>
        {onAdd && (
          <button
            type="submit"
            className="btn btn-primary animated slideInLeft  hover_color py-md-2 px-md-4"
            style={{
              borderTopLeftRadius: "0px",
              borderBottomRightRadius: "0px",
              borderBottomLeftRadius: "0px",
            }}
            onClick={onAdd}
          >
            Add
          </button>
        )}
      </div>
      <Table
        columns={columns}
        dataSource={Array.isArray(data) ? data : []}
        pagination={{
          position: ["bottomRight"],
        }}
      />
    </section>
  )
}

export default AdminTable
