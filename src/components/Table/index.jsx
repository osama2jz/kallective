import { useTheme } from "@emotion/react";
import {
  Anchor,
  Badge,
  Box,
  Group,
  Loader,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
// import Papa from "papaparse";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Button from "../Button";

// import { Download } from "tabler-icons-react";

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
  const [select, setSelected] = useState(null);

  // const actionsMemo = React.useMemo(() => {
  //   data?.forEach((element) => {
  //     delete element?.id;
  //   });
  //   let csv = Papa.unparse(data);
  //   return (
  //     <Anchor
  //       style={{
  //         display: "flex",
  //         alignItems: "center",
  //         gap: "10px",
  //         border: "2px dashed rgb(255, 140, 147)",
  //         borderRadius: "10px",
  //         fontSize: "14px",
  //         padding: "5px",
  //       }}
  //       href={`data:text/csv;charset=utf-8,${encodeURI(csv)}`}
  //       download={`${type}.csv`}
  //       color="primary.0"
  //     >
  //       <Download size={16} />
  //       Download
  //     </Anchor>
  //   );
  // }, [data, type]);

  const handleChange = ({ selectedRows }) => {
    setSelected(selectedRows);
  };

  return (
    <Box
      style={{
        border: "2px solid #E5E5E5",
        borderRadius: "10px",
        overflow: "hidden",
        // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Group
        justify="space-between"
        p="md"
        style={{ borderBottom: "1px solid rgb(0,0,0,0.1)" }}
      >
        <Box>
          <Text fw={600} fz={18}>
            {props?.label}
            <Badge
              variant="outline"
              ml="md"
              styles={{ root: { borderColor: "rgb(0,0,0,0.2)" } }}
            >
              {"215 drops"}
            </Badge>
          </Text>
          <Text c="gray">{props?.subTitle}</Text>
        </Box>
        {select?.length > 0 && (
          <Button label={`Delete selected ${type}`} leftIcon={"trash.svg"} />
        )}
      </Group>
      <DataTable
        columns={columns}
        data={data}
        pagination
        responsive
        subHeaderAlign="right"
        subHeaderWrap
        selectableRows
        onSelectedRowsChange={handleChange}
        progressComponent={<Loader my={10} color={theme.primaryColor} />}
        // actions={download && actionsMemo}
        customStyles={customStyles}
        {...props}
      />
    </Box>
  );
};

export default DataGrid;
