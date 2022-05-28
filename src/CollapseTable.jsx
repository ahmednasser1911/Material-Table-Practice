import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Checkbox, TextField } from "@mui/material";
import { uniqueId } from "lodash";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
const options = [
  { value: "اتصالات", label: "اتصالات" },
  { value: "فودافون", label: "فودافون" },
  { value: "موبينيل", label: "موبينيل" },
];

const services = [
  {
    id: 1,
    name: "خدمة اتصالات",
    subServices: [
      {
        id: uniqueId(),
        name: "اتصالات كاش",
        commition: "30%",
        value: 10,
        status: "مفعلة",
      },
      {
        id: uniqueId(),
        name: "شحن",
        commition: "10%",
        value: 10,
        status: "غسؤ مفعلة",
      },
      {
        id: uniqueId(),
        name: "كارت",
        commition: "40%",
        value: 10,
        status: "مفعلة",
      },
    ],
  },
  {
    id: 2,
    name: "خدمة موبنيل",
    subServices: [
      {
        id: uniqueId(),
        name: "موبينيل كاش",
        commition: "30%",
        value: 10,
        status: "مفعلة",
      },
      {
        id: uniqueId(),
        name: "شحن",
        commition: "10%",
        value: 10,
        status: "غسؤ مفعلة",
      },
      {
        id: uniqueId(),
        name: "كارت",
        commition: "40%",
        value: 10,
        status: "مفعلة",
      },
    ],
  },
  {
    id: 3,
    name: "خدمة فودافون",
    subServices: [
      {
        id: uniqueId(),
        name: "فودافون كاش",
        commition: "30%",
        value: 10,
        status: "مفعلة",
      },
      {
        id: uniqueId(),
        name: "شحن",
        commition: "10%",
        value: 10,
        status: "غسؤ مفعلة",
      },
      {
        id: uniqueId(),
        name: "كارت",
        commition: "40%",
        value: 10,
        status: "مفعلة",
      },
    ],
  },
  {
    id: 4,
    name: "WE خدمة",
    commition: "30%",
    value: 10,
    status: "مفعلة",
  },
];

const stylesReactSelect = {
  control: (base, state) => ({
    ...base,
    background: "#023950",
    color: "white",
    borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
    boxShadow: state.isFocused ? null : null,
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    marginTop: 0,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
};

function Row(props) {
  const { row, isItemSelected, handleClick, selected } = props;
  const [open, setOpen] = React.useState(false);
  const [rowCommition, setRowCommition] = React.useState("");

  return (
    <React.Fragment>
      {row.hasOwnProperty("subServices") ? (

          <>
            <TableRow sx={{ "& > *": { borderBottom: "unset", padding: 0 } }}>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />

              <TableCell align="right">
                {row.name}
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
                <Checkbox color="primary" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                style={{ paddingBottom: 0, paddingTop: 0 }}
                colSpan={6}
              >
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                    <Table size="small" aria-label="purchases">
                      <TableBody>
                        {row.subServices.map((subService) => (
                          <TableRow key={subService.name}>
                            <TableCell
                              align="right"
                              sx={{
                                width: "20%",
                              }}
                            >
                              <div
                                style={{
                                  width: "50%",
                                  marginLeft: "200px",
                                  textAlign: "center",
                                }}
                              >
                                {subService.status}
                              </div>
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{
                                width: "20%",
                              }}
                            >
                              <div
                                style={{
                                  width: "50%",
                                  marginLeft: "200px",
                                  textAlign: "center",
                                }}
                              >
                                <TextField
                                  sx={{
                                    textAlign: "center",
                                    alignItems: "center",
                                  }}
                                  id="outlined-size-small"
                                  variant="outlined"
                                  placeholder="برجاء ادخال قيمة"
                                  size="small"
                                />
                              </div>
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{
                                width: "20%",
                              }}
                            >
                              <div
                                style={{
                                  width: "50%",
                                  marginLeft: "200px",
                                }}
                              >
                                <Select
                                  styles={stylesReactSelect}
                                  isSearchable={false}
                                  className="basic-single"
                                  classNamePrefix="select"
                                  name="color"
                                  options={[
                                    { value: "قيمة", label: "قيمة" },
                                    { value: "ثابتة", label: "ثابتة" },
                                  ]}
                                  onChange={setRowCommition}
                                  placeholder="اختر عمولة"
                                />
                              </div>
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{
                                width: "20%",
                              }}
                            >
                              {subService.name}
                              <Checkbox
                                color="primary"
                                checked={selected.indexOf(subService.id) !== -1}
                                onChange={(e) => handleClick(e, subService.id)}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </>
        
      ) : (
        <>
          <TableRow sx={{ "& > *": { borderBottom: "unset", padding: 0 } }}>

            {/* <TableCell align="right">
              {row.name}
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
              <Checkbox color="primary" />
            </TableCell> */}
            <TableCell
              align="right"
              sx={{
                width: "20%",
              }}
            >
              <div
                style={{
                  width: "50%",
                  marginLeft: "200px",
                  textAlign: "center",
                }}
              >
                {row.status}
              </div>
            </TableCell>
            <TableCell
              align="right"
              sx={{
                width: "20%",
              }}
            >
              <div
                style={{
                  width: "50%",
                  marginLeft: "200px",
                  textAlign: "center",
                }}
              >
                <TextField
                  sx={{
                    textAlign: "center",
                    alignItems: "center",
                  }}
                  id="outlined-size-small"
                  variant="outlined"
                  placeholder="برجاء ادخال قيمة"
                  size="small"
                />
              </div>
            </TableCell>
            <TableCell
              align="right"
              sx={{
                width: "20%",
              }}
            >
              <div
                style={{
                  width: "50%",
                  marginLeft: "200px",
                }}
              >
                <Select
                  styles={stylesReactSelect}
                  isSearchable={false}
                  className="basic-single"
                  classNamePrefix="select"
                  name="color"
                  options={[
                    { value: "قيمة", label: "قيمة" },
                    { value: "ثابتة", label: "ثابتة" },
                  ]}
                  onChange={setRowCommition}
                  placeholder="اختر عمولة"
                />
              </div>
            </TableCell>{" "}
            <TableCell
              align="right"
              sx={{
                width: "20%",
              }}
            >
              {row.name}
              <Checkbox
                color="primary"
                checked={selected.indexOf(row.id) !== -1}
                onChange={(e) => handleClick(e, row.id)}
              />
            </TableCell>
          </TableRow>
        </>
      )}
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

export default function CollapsibleTable() {
  const [selected, setSelected] = React.useState([]);
  const [selectedServices, setSelectedServices] = React.useState([]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = services.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, rowId) => {
    const selectedIndex = selected.indexOf(rowId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, rowId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const headStyle = {};
  return (
    <>
      <div
        style={{
          textAlign: "center",
          alignItems: "center",
          marginLeft: 300,
          width: "45%",
        }}
      >
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={options}
          onChange={setSelectedServices}
          //onInputChange={handleInputChange}
          placeholder="بحث"
          // styles={style.select}
        />
      </div>

      <h4>
        {selectedServices.map((i) => (
          <h4>{i.value}</h4>
        ))}
      </h4>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />

              <TableCell
                align="right"
                sx={{
                  width: "20%",
                }}
              >
                الحالة
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  width: "20%",
                }}
              >
                القيمة
              </TableCell>
              <TableCell align="right" sx={headStyle}>
                العمولات
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  width: "20%",
                }}
              >
                الخدمات
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((row) => (
              <Row
                key={row.name}
                row={row}
                handleClick={handleClick}
                isItemSelected={isSelected}
                selected={selected}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
