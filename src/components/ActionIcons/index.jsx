import { ActionIcon, Flex, Tooltip } from "@mantine/core";
import React, { useContext, useState } from "react";
// import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { Eye, Pencil, PencilOff, Trash, TrashOff } from "tabler-icons-react";
import DeleteModal from "../DeleteModal";

const ActionIcons = ({
  type,
  edit,
  view,
  del,
  viewData,
  blocked,
  viewSize = "lg",
}) => {
  // const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [openDelete, setOpenDelete] = useState(false);
  const [openView, setOpenView] = useState(false);

  //to view
  const handleView = () => {
    setOpenView(true);
  };

  //to edit
  // const handleEdit = () => {
  //   switch (type) {
  //     case "Category":
  //       navigate(routeNames.general.addCategory, {
  //         state: {
  //           isUpdate: true,
  //           data: rowData,
  //         },
  //       });
  //       break;
  //     case "Sub-Category":
  //       navigate(routeNames.general.addSubCategory, {
  //         state: {
  //           isUpdate: true,
  //           data: rowData,
  //         },
  //       });
  //       break;
  //     case "Product":
  //       navigate(routeNames.general.addProduct, {
  //         state: {
  //           isUpdate: true,
  //           data: rowData,
  //         },
  //       });
  //       break;
  //     case "Expenses":
  //       navigate(routeNames.general.addExpenses, {
  //         state: {
  //           isUpdate: true,
  //           data: rowData,
  //         },
  //       });
  //       break;
  //     case "Sale":
  //       navigate(routeNames.general.addSale, {
  //         state: {
  //           isUpdate: true,
  //           data: rowData,
  //         },
  //       });
  //       break;
  //     case "Coupen":
  //       navigate(routeNames.general.addCoupen, {
  //         state: {
  //           isUpdate: true,
  //           data: rowData,
  //         },
  //       });
  //       break;
  //     case "Blog":
  //       navigate(routeNames.general.addBlog, {
  //         state: {
  //           isUpdate: true,
  //           data: rowData,
  //         },
  //       });
  //       break;
  //     case "FAQ":
  //       navigate(routeNames.general.addFaq, {
  //         state: {
  //           isUpdate: true,
  //           data: rowData,
  //         },
  //       });
  //       break;
  //   }
  // };

  //to delete
  // const handleDelete = useMutation(
  //   async () => {
  //     const link = backendUrl + `/${type.toLowerCase()}/${rowData._id}`;
  //     return axios.delete(link, {
  //       // headers: {
  //       //   authorization: `Bearer ${user.token}`,
  //       // },
  //     });
  //   },
  //   {
  //     onSuccess: (res) => {
  //       setOpenDelete(false);
  //       showNotification({
  //         title: "success",
  //         message: `${type} Deleted Successfully`,
  //         color: "green",
  //       });
  //       if (type === "Category")
  //         queryClient.invalidateQueries("fetchCategories");
  //       else if (type === "Product")
  //         queryClient.invalidateQueries("fetchProducts");
  //       else if (type === "Sale") queryClient.invalidateQueries("fetchSales");
  //       else if (type === "Expense")
  //         queryClient.invalidateQueries("fetchExpenses");
  //       else if (type === "User") queryClient.invalidateQueries("fetchUsers");
  //       else if (type === "Blog") queryClient.invalidateQueries("fetchBlogs");
  //       else if (type === "Faq") queryClient.invalidateQueries("fetchFaqs");
  //       else if (type === "Order") queryClient.invalidateQueries("fetchOrders");
  //       else if (type === "Coupen")
  //         queryClient.invalidateQueries("fetchCoupens");
  //     },
  //     onError: (res) => {
  //       showNotification({
  //         title: "Error",
  //         message: res?.data?.message,
  //         color: "red",
  //       });
  //       setOpenDelete(false);
  //     },
  //   }
  // );

  return (
    <Flex gap={5}>
      {view && (
        <Tooltip label="View">
          <ActionIcon c="gray">
            <Eye onClick={handleView} />
          </ActionIcon>
        </Tooltip>
      )}
      {edit && (
        <Tooltip label="Edit">
          <ActionIcon disabled={blocked} bg="white">
            {blocked ? <PencilOff /> : <Pencil stroke="gray" />}
          </ActionIcon>
        </Tooltip>
      )}
      {del && (
        <Tooltip label="Delete">
          <ActionIcon disabled={blocked} bg="white">
            {blocked ? <TrashOff /> : <Trash stroke={"gray"} />}
          </ActionIcon>
        </Tooltip>
      )}
      {/* <ViewModal
        opened={openView}
        setOpened={setOpenView}
        title={`View ${type}`}
        size={viewSize}
      >
        {viewData}
      </ViewModal> */}
      <DeleteModal
        label={`Delete ${type}`}
        message={`Are you sure you want to delete this ${type}. This Action is irreversible.`}
        opened={openDelete}
        // onDelete={() => handleDelete.mutate()}
        setOpened={setOpenDelete}
        // loading={handleDelete.isLoading}
      />
    </Flex>
  );
};

export default ActionIcons;
