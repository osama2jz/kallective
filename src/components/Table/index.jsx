import { useTheme } from "@emotion/react";
import { Anchor, Box, Loader, useMantineTheme } from "@mantine/core";
import Papa from "papaparse";
import React from "react";
import DataTable from "react-data-table-component";

import { Download } from "tabler-icons-react";

const customStyles = {
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: 600,
    },
  },
  rows: {
    style: {
      fontSize: "14px",
    },
  },
};

const DataGrid = ({ columns, data, type, download = true, ...props }) => {
  const theme = useMantineTheme();

  const actionsMemo = React.useMemo(() => {
    data?.forEach((element) => {
      delete element?.id;
    });
    let csv = Papa.unparse(data);
    return (
      <Anchor
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          border: "2px dashed rgb(255, 140, 147)",
          borderRadius: "10px",
          fontSize: "14px",
          padding: "5px",
        }}
        href={`data:text/csv;charset=utf-8,${encodeURI(csv)}`}
        download={`${type}.csv`}
        color="primary.0"
      >
        <Download size={16} />
        Download
      </Anchor>
    );
  }, [data, type]);

  return (
    <Box
      style={{
        border: "2px solid #E5E5E5",
        borderRadius: "10px",
        overflow: "hidden",
        // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <DataTable
        columns={columns}
        data={data}
        pagination
        responsive
        subHeaderAlign="right"
        subHeaderWrap
        // selectableRows
        progressComponent={<Loader my={10} color={theme.primaryColor} />}
        actions={download && actionsMemo}
        customStyles={customStyles}
        {...props}
      />
    </Box>
  );
};

export default DataGrid;
