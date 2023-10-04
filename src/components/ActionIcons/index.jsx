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

  //to view
  const handleView = () => {
    setOpenView(true);
  };

  return (
    <Flex gap={5}>
      {view && (
        <Tooltip label="View">
          <ActionIcon c="gray">
            <Eye onClick={handleView} />
          </ActionIcon>
        </Tooltip>
      )}
      {edit && edit}
      {del && (
        <Tooltip label="Delete">
          <ActionIcon
            disabled={blocked}
            bg="white"
            onClick={() => setOpenDelete(true)}
          >
            {blocked ? <TrashOff /> : <Trash stroke={"gray"} />}
          </ActionIcon>
        </Tooltip>
      )}

      <DeleteModal
        label={`Delete Selected ${type}(s)`}
        message={`Are you sure you want to delete this ${type}(s). This Action Cannot be undone.`}
        opened={openDelete}
        // onDelete={() => handleDelete.mutate()}
        setOpened={setOpenDelete}
        // loading={handleDelete.isLoading}
      />
    </Flex>
  );
};

export default ActionIcons;
