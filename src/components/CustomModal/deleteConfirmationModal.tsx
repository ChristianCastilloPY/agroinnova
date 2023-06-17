import React from "react";
import { Alert, Button, Grid, Typography } from "@mui/material";
import CustomModal from ".";

interface IModalDelete {
  modalDelete: boolean;
  modalDeleteOpen: () => void;
  handleCloseModal: () => void;
  functionToDeleteRegistry: () => void;
}

export default function DeleteConfirmationModal({
  modalDelete,
  modalDeleteOpen,
  handleCloseModal,
  functionToDeleteRegistry,
}: IModalDelete) {
  return (
    <CustomModal
      open={modalDelete}
      modalOpen={modalDeleteOpen}
      modalClose={handleCloseModal}
      type="update"
    >
      <Typography id="modal-modal-title" variant="h6" component="h2">
        ¿Seguro que desea eliminar este registro?
      </Typography>
      <Alert severity="error" sx={{ marginTop: "10px" }}>
        Esta acción no se podrá deshacer
      </Alert>
      <Grid
        container
        direction="row"
        justifyContent="center"
        textAlign="center"
        marginTop={4}
        className="button-container"
      >
        <Grid item xs={12} sm={4}>
          <Button
            onClick={handleCloseModal}
            variant="outlined"
            size="small"
            sx={{ width: "80%" }}
            color="warning"
          >
            Volver
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            color="error"
            variant="outlined"
            size="small"
            sx={{ width: "80%" }}
            onClick={functionToDeleteRegistry}
          >
            Eliminar
          </Button>
        </Grid>
      </Grid>
    </CustomModal>
  );
}
