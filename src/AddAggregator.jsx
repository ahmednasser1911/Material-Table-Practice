import React, { Fragment } from "react";
// import "./Edafat.css";
import { Form } from "react-bootstrap";
import Divider from "@mui/material/Divider";
import Select from "react-select";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
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
import { Checkbox } from "@mui/material";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 515,
    },
  },
};
const dataServices = [
  {
    name: "خدمات اتصالات",
    omola: "",
    qema: "",
    hala: "",
    isMajor: true,
    ServiceId: 1,
    isAlone: false,
  },
  {
    name: "شحن نت",
    omola: "نسبة",
    qema: "70%",
    hala: "",
    isMajor: false,
    ServiceId: 1,
    isAlone: false,
  },
  {
    name: "فاتورة تليفون",
    omola: "ثابتة",
    qema: "1",
    hala: "",
    isMajor: false,
    ServiceId: 1,
    isAlone: false,
  },
  {
    name: "كارت فكة",
    omola: "نسبة",
    qema: "70%",
    hala: "",
    isMajor: false,
    ServiceId: 1,
    isAlone: false,
  },
  {
    name: "خدمات موبينل",
    omola: "",
    qema: "",
    hala: "",
    isMajor: true,
    ServiceId: 2,
    isAlone: false,
  },
  {
    name: "شحن نت",
    omola: "نسبة",
    qema: "70%",
    hala: "",
    isMajor: false,
    ServiceId: 2,
    isAlone: false,
  },
  {
    name: "فاتورة تليفون",
    omola: "ثابتة",
    qema: "1",
    hala: "",
    isMajor: false,
    ServiceId: 2,
    isAlone: false,
  },
  {
    name: "كارت فكة",
    omola: "نسبة",
    qema: "70%",
    hala: "",
    isMajor: false,
    ServiceId: 2,
    isAlone: false,
  },
  {
    name: "خدمات Bee",
    omola: "",
    qema: "",
    hala: "",
    isMajor: true,
    ServiceId: 3,
    isAlone: false,
  },
  {
    name: "شحن نت",
    omola: "نسبة",
    qema: "70%",
    hala: "",
    isMajor: false,
    ServiceId: 3,
    isAlone: false,
  },
  {
    name: "فاتورة تليفون",
    omola: "ثابتة",
    qema: "1",
    hala: "",
    isMajor: false,
    ServiceId: 3,
    isAlone: false,
  },
  {
    name: "كارت فكة",
    omola: "نسبة",
    qema: "70%",
    hala: "",
    isMajor: false,
    ServiceId: 3,
    isAlone: false,
  },
  {
    name: "خدمة",
    omola: "",
    qema: "",
    hala: "",
    isMajor: false,
    ServiceId: 4,
    isAlone: true,
  },
];
const servicesOptions = [
  { value: "جميع الخدمات", label: "جميع الخدمات" },
  { value: "خدمات اتصالات", label: "خدمات اتصالات" },
  { value: "خدمات موبينيل", label: "خدمات موبينيل" },
  { value: "خدمات فودافون", label: "خدمات فودافون" },
  { value: "خدمات Bee", label: "خدمات Bee" },
  { value: "خدمة", label: "خدمة" },
];
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        className="table-hover"
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer", padding: 0 }}
      >
        <TableCell className="tableCellTxt col-2" align="right">
          <input type="checkbox" /> {row.name}
        </TableCell>
        <TableCell className="tableCellTxt col-2" align="right">
          {row.omola}
        </TableCell>
        <TableCell className="tableCellTxt col-2" align="right">
          {row.qema}
        </TableCell>
        <TableCell className="tableCellTxt col-2" align="right">
          {row.hala}
        </TableCell>
      </TableRow>
      {open &&
        dataServices
          .filter((r) => r.ServiceId == row.ServiceId && r.isMajor == false)
          .map((subService) => (
            <TableRow>
              <TableCell className="col-2" align="right">
                <input type="checkbox" className="form-controle"/> {subService.name}
              </TableCell>
              <TableCell className="col-2" align="right">
                {subService.omola}
              </TableCell>
              <TableCell className="col-2" align="right">
                {subService.qema}
              </TableCell>
              <TableCell className="col-2" align="right">
                {subService.hala}
              </TableCell>
            </TableRow>
          ))}
    </React.Fragment>
  );
}

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Edafat = () => {
  const theme = useTheme();
  const [servicesForSearch, setServicesForSearch] = React.useState([]);

  return (
    <div className="mainPage" dir="rtl">
      <div
        className="py-5"
        style={{ marginRight: "100px", marginLeft: "100px" }}
      >
        <span className="headLineRoute">
          {"الشركاء" + " > " + "إضافة شريك"}
        </span>
        <div style={{ backgroundColor: "white" }} className="row p-2">
          <div className="col-6 px-2">
            <Form.Group className="mb-3 inputLbel" controlId="formBasicEmail">
              <Form.Label>الإسم</Form.Label>
              <Form.Control
                type="text"
                className="shadow p-2 rounded inputText"
              />
            </Form.Group>
          </div>
          <div className="col-6 px-2">
            <Form.Group className="mb-3 inputLbel" controlId="formBasicEmail">
              <Form.Label>الكود</Form.Label>
              <Form.Control
                type="text"
                className="shadow p-2 rounded inputText"
              />
            </Form.Group>
          </div>
          <div className="col-6 px-2">
            <Form.Group className="mb-3 inputLbel" controlId="formBasicEmail">
              <Form.Label>رقم المحمول</Form.Label>
              <Form.Control
                type="text"
                className="shadow p-2 rounded inputText"
              />
            </Form.Group>
          </div>
          <div className="col-6 px-2">
            <Form.Group className="mb-3 inputLbel" controlId="formBasicEmail">
              <Form.Label>العنوان</Form.Label>
              <Form.Control
                type="text"
                className="shadow p-2 rounded inputText"
              />
            </Form.Group>
          </div>
          <div className="col-6 px-2">
            <Form.Group className="mb-3 inputLbel" controlId="formBasicEmail">
              <Form.Label>التواصل</Form.Label>
              <Form.Control
                type="text"
                className="shadow p-2 rounded inputText"
              />
            </Form.Group>
          </div>
        </div>
        <div style={{ backgroundColor: "white" }} className="row">
          <Divider style={{ color: "#F7FAFC" }} />
          <span className="pt-4 px-4 headLineRoute">{"إضافة الخدمات"}</span>
          <Divider style={{ color: "#F7FAFC" }} />
          <div className="d-flex justify-content-center py-4">
            <FormControl sx={{ width: 250, height: 40 }}>
              <Select
                isMulti
                name="colors"
                options={servicesOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder='بحث'
              />
            </FormControl>
          </div>
          <div className="row pt-4">
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell className="col-2" align="center">
                      الخدمات
                    </TableCell>
                    <TableCell className="col-2" align="center">
                      العمولات
                    </TableCell>
                    <TableCell className="col-2" align="center">
                      القيمة
                    </TableCell>
                    <TableCell className="col-2" align="center">
                      الحالة
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{paddingTop:0 , paddingBottom:0}}>
                  {dataServices.map(
                    (row) =>
                      row.isAlone == true ||
                      (row.isMajor == true && <Row key={row.name} row={row} />)
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edafat;
