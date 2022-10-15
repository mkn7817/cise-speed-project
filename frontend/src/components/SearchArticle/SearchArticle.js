import React, { useEffect } from "react";
import "./SearchArticle.css";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

export const SearchArticle = () => {
  const [articleList, setArticleList] = useState([]);
  const [practice, setPractice] = useState("");
  const [claim, setClaim] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const filterData = async () => {
      let url = "/api/articles/filter?approvalStatus=Approved";
      if (searchText !== "") {
        url += "&title=" + searchText;
      }
      if (practice !== "") {
        url += "&practice=" + practice;
      }
      if (claim !== "") {
        url += "&claim=" + claim;
      }
      await axios
        .get(url)
        .then((res) => {
          setArticleList(res.data);
        })
        .catch((err) => {
          console.log("error:" + err);
        });
    };
    filterData();
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };
  const navigateSubmit = () => {
    navigate("/post");
  };

  const getData = async () => {
    await axios
      .get("/api/articles")
      .then((res) => {
        setArticleList(res.data);
      })
      .catch((err) => {
        console.log("error:" + err);
      });
  };

  const handleSearch = async () => {
    let url = "/api/articles/filter?approvalStatus=Approved";
    if (searchText !== "") {
      url += "&title=" + searchText;
    }
    if (practice !== "") {
      url += "&practice=" + practice;
    }
    if (claim !== "") {
      url += "&claim=" + claim;
    }
    await axios
      .get(url)
      .then((res) => {
        setArticleList(res.data);
      })
      .catch((err) => {
        console.log("error:" + err);
      });
  };

  const columns = [
    { field: "id", headerName: "ID", hide: true },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      editable: false,
    },
    {
        field: "sepractice",
        headerName: "SePractice",
        width: 150,
        editable: false,
    },
    {
        field: "claim",
        headerName: "Claim",
        width: 220,
        editable: false,
    },
    {
        field: "result",
        headerName: "Result",
        width: 220,
        editable: false,
    },
    {
        field: "researchType",
        headerName: "Research",
        width: 150,
        editable: false,
    },
    {
      field: "participant",
      headerName: "Participant",
      width: 200,
      editable: false,
    },
    {
      field: "journalname",
      headerName: "Journalname",
      width: 150,
      editable: false,
    },
    {
      field: "authors",
      headerName: "Authors",
      width: 150,
      editable: false,
    },
    {
      field: "year",
      headerName: "Year",
      type: "string",
      width: 180,
      editable: false,
    },
    {
      field: "volume",
      headerName: "Volume",
      type: "string",
      width: 300,
      editable: false,
    },
    {
      field: "number",
      headerName: "Number",
      type: "string",
      width: 110,
      editable: false,
    },
    {
      field: "pages",
      headerName: "Pages",
      type: "string",
      width: 150,
      editable: false,
    },
    {
        field: "doi",
        headerName: "DOI",
        width: 350,
        editable: false,
        renderCell: (doi) => (
          <Link href={`${doi.value}`} target="_blank">
            {doi.value}
          </Link>
        ),
      },
  ];

  const rows =
    articleList.length > 0 &&
    articleList.map((row) => ({
      id: row._id,
      title: row.title,
      sepractice: row.sepractice,
      claim: row.claim,
      result: row.result,
      researchType: row.researchType,
      participant: row.participant,
      journalname: row.journalname,
      authors: row.authors,
      year: row.year,
      volume: row.volume,
      journal: row.journalName,
      number: row.number,
      pages: row.pages,
      doi: row.doi,

    }));

  const handlePracticeChange = (e) => {
    e.preventDefault();
    setPractice(e.target.value);
  };

  const handleClaimChange = (e) => {
    e.preventDefault();
    setClaim(e.target.value);
  };

  return (
    <body>
      <button id="homeButton" onClick={navigateHome}>
        <h6 className="gradient-text">Home</h6>
      </button>
      <button id="submitButton" onClick={navigateSubmit}>
        <h6 className="gradient-text">Submit Article</h6>
      </button>
      <div id="contentContainer">
        <h1>Search Articles</h1>
        <Box
          sx={{
            width: "60%",
            backgroundColor: "white",
            borderRadius: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.5% 0.5% 0.5% 0.5%",
            marginTop: "1%",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Search Article"
            variant="outlined"
            sx={{ width: "30%" }}
            value={searchText}
            onChange={(text) => setSearchText(text.target.value)}
          />
          <FormControl sx={{ width: "20%" }}>
            <InputLabel id="demo-simple-select-label">Practice</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={practice}
              label="Practice"
              onChange={handlePracticeChange}
            >
              <MenuItem value={""}>Show All</MenuItem>
              <MenuItem value={"TDD"}>TDD</MenuItem>
              <MenuItem value={"BDD"}>BDD</MenuItem>
              <MenuItem value={"Agile"}>Agile</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "20%" }}>
            <InputLabel id="demo-simple-select-label">Claim</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={claim}
              label="Practice"
              onChange={handleClaimChange}
            >
              <MenuItem value={""}>Show All</MenuItem>
              <MenuItem value={"Beneficial to quality"}>
                Beneficial to quality
              </MenuItem>
              <MenuItem value={"Detrimental to development"}>
                Detrimental to development
              </MenuItem>
              <MenuItem value={"Reduces development time"}>
                Reduces development time
              </MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={handleSearch}
            variant="contained"
            sx={{
              backgroundColor: "#ff5f6d",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#ff5f6d",
              },
            }}
          >
            Search
          </Button>
        </Box>
        <Box sx={{ height: 400, width: "80%", marginTop: "2%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            disableColumnMenu
          />
        </Box>
      </div>
    </body>
  );
};
export default SearchArticle;