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
import Papa from "papaparse";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Button from "../Button";
import { CloudDownload } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [select, setSelected] = useState(null);

  const actionsMemo = React.useMemo(() => {
    data?.forEach((element) => {
      delete element?.id;
    });
    let csv = Papa.unparse(data);
    return (
      <Button
        primary={false}
        label={"Download CSV"}
        leftIcon={"download.svg"}
        onClick={() =>
          (location.href = `data:text/csv;charset=utf-8,${encodeURI(csv)}`)
        }
      />
      // <Anchor
      //   style={{
      //     display: "flex",
      //     alignItems: "center",
      //     gap: "10px",
      //     borderRadius: "10px",
      //     fontSize: "14px",
      //     padding: "5px",
      //   }}
      //   href={`data:text/csv;charset=utf-8,${encodeURI(csv)}`}
      //   download={`${type}.csv`}
      // >
      //   <CloudDownload size={16} />
      //   Download
      // </Anchor>
    );
  }, [data]);

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
              {data.length} {type}
            </Badge>
          </Text>
          <Text c="gray">{props?.subTitle}</Text>
        </Box>
        <Group>
          {actionsMemo}
          {select?.length > 0 && (
            <Button label={`Delete selected ${type}`} leftIcon={"trash.svg"} />
          )}
        </Group>
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
