import { Grid, Button, Box } from "@mui/material";
import { isMobile } from "react-device-detect";
import PropTypes from "prop-types";
import CustomAccordion from "../CustomAccordion/CustomAccordion";
import CustomInput from "../Form/CustomInput";

type TInputs = {
  id: number;
  name: string;
  label?: string;
  type?: string;
  options?: Array<{ value: string; label: string }>;
  defaultValue?: string;
  action?: JSX.Element;
};

type TActions = {
  name: string;
  action: string | JSX.Element;
};

interface IInputFilter {
  onFilter: () => void;
  handleChangeFilter: (value: string, name: string) => void;
  inputs: TInputs[];
  actions?: TActions[];
}

const renderFilters = ({
  inputs,
  onFilter,
  handleChangeFilter,
  actions,
}: IInputFilter) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{
          alignItems: "baseline",
          flexGrow: 1,
        }}
      >
        {inputs.map((input) => {
          return (
            <Grid
              key={input.id}
              item
              xs={inputs.length > 3 ? 6 : 4}
              sm={2}
              sx={{
                justifyContent: "end",
                alignItems: "center",
                display: "flex",
              }}
            >
              <CustomInput
                name={input.name}
                label={input.label}
                onChange={(e) => handleChangeFilter(e.target.value, input.name)}
                type={input.type && "datetime-local"}
                options={input.options && input.options}
                defaultValue={input.defaultValue && input.defaultValue}
              />
            </Grid>
          );
        })}
        <Grid item xs={12} sm={2}>
          <Button
            size="small"
            variant="contained"
            onClick={onFilter}
            sx={{
              marginRight: "10px",
              flexGrow: "1",
            }}
          >
            Filtrar
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ justifyContent: "end", flexGrow: 0 }}>
        <Grid
          item
          xs={inputs.length <= 3 ? 4 : 12}
          sm={2}
          style={{ margin: "15px 0px", display: "flex", justifyContent: "end" }}
        >
          {actions &&
            actions.map((item) => {
              return (
                <Button key={item.name} size="small" variant="outlined">
                  {item.action}
                </Button>
              );
            })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default function InputsFilter({
  onFilter,
  handleChangeFilter,
  inputs,
  actions,
}: IInputFilter) {
  return isMobile && inputs.length > 3 ? (
    <CustomAccordion items={[{ title: "Filtrar por:" }]}>
      {renderFilters({ inputs, onFilter, handleChangeFilter, actions })}
    </CustomAccordion>
  ) : (
    renderFilters({ inputs, onFilter, handleChangeFilter, actions })
  );
}

InputsFilter.defaultProps = {
  actions: null,
};

InputsFilter.prototype = {
  actions: PropTypes.node,
};
