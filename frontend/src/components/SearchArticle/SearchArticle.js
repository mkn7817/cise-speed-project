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
      let url = "/api/books/filter?approvalStatus=Approved";
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
      .get("http://localhost:8082/api/books")
      .then((res) => {
        setArticleList(res.data);

      })
      .catch((err) => {
        console.log("error:" + err);
      });
  };

  const handleSearch = async () => {
    let url = "/api/books/filter?approvalStatus=Approved";
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
  var i = 0;  
  const articleList2 = [];
  //loop array for keyword search
  articleList.forEach(function(item){
    //TO DO adjust for ignoring case sensitivity

    if(item.title.includes(searchText)) {
      console.log('Search: '+searchText+' title: '+item.title);
      articleList2.push(item);
    }
    
    var isInArray = articleList2.indexOf(item) !== -1;
    if(!isInArray && item.sepractice.includes(searchText)){
      console.log('Search: '+searchText+' title: '+item.sepractice);
      articleList2.push(item);
      console.log(i+' is in array '+isInArray);
      console.log('Length of articleList2: '+articleList2.length)
    }

    isInArray = articleList2.indexOf(item) !== -1;
    if(!isInArray && item.claim.includes(searchText)){
      console.log('Search: '+searchText+' title: '+item.claim);
      articleList2.push(item);
      console.log(i+' is in array '+isInArray);
      console.log('Length of articleList2: '+articleList2.length)
    }

    isInArray = articleList2.indexOf(item) !== -1;
    if(!isInArray && item.claim.includes(searchText)){
      console.log('Search: '+searchText+' title: '+item.claim);
      articleList2.push(item);
      console.log(i+' is in array '+isInArray);
      console.log('Length of articleList2: '+articleList2.length)
    }

    isInArray = articleList2.indexOf(item) !== -1;
    if(!isInArray && item.result.includes(searchText)){
      console.log('Search: '+searchText+' title: '+item.result);
      articleList2.push(item);
      console.log(i+' is in array '+isInArray);
      console.log('Length of articleList2: '+articleList2.length)
    }

    isInArray = articleList2.indexOf(item) !== -1;
    if(!isInArray && item.researchtype.includes(searchText)){
      console.log('Search: '+searchText+' title: '+item.researchtype);
      articleList2.push(item);
      console.log(i+' is in array '+isInArray);
      console.log('Length of articleList2: '+articleList2.length)
    }

    isInArray = articleList2.indexOf(item) !== -1;
    if(!isInArray && item.participant.includes(searchText)){
      console.log('Search: '+searchText+' title: '+item.participant);
      articleList2.push(item);
      console.log(i+' is in array '+isInArray);
      console.log('Length of articleList2: '+articleList2.length)
    }

    isInArray = articleList2.indexOf(item) !== -1;
    if(!isInArray && item.journalname.includes(searchText)){
      console.log('Search: '+searchText+' title: '+item.journalname);
      articleList2.push(item);
      console.log(i+' is in array '+isInArray);
      console.log('Length of articleList2: '+articleList2.length)
    }

    isInArray = articleList2.indexOf(item) !== -1;
    if(!isInArray && item.authors.includes(searchText)){
      console.log('Search: '+searchText+' title: '+item.authors);
      articleList2.push(item);
      console.log(i+' is in array '+isInArray);
      console.log('Length of articleList2: '+articleList2.length)
    }

    isInArray = articleList2.indexOf(item) !== -1;
    if(!isInArray && item.year.includes(searchText)){
      console.log('Search: '+searchText+' title: '+item.year);
      articleList2.push(item);
      console.log(i+' is in array '+isInArray);
      console.log('Length of articleList2: '+articleList2.length)
    }

    isInArray = articleList2.indexOf(item) !== -1;
    if(!isInArray && item.volume.includes(searchText)){
      console.log('Search: '+searchText+' title: '+item.volume);
      articleList2.push(item);
      console.log(i+' is in array '+isInArray);
      console.log('Length of articleList2: '+articleList2.length)
    }

    isInArray = articleList2.indexOf(item) !== -1;
    if(!isInArray && item.number.includes(searchText)){
      console.log('Search: '+searchText+' title: '+item.number);
      articleList2.push(item);
      console.log(i+' is in array '+isInArray);
      console.log('Length of articleList2: '+articleList2.length)
    }

    isInArray = articleList2.indexOf(item) !== -1;
    if(!isInArray && item.pages.includes(searchText)){
      console.log('Search: '+searchText+' title: '+item.pages);
      articleList2.push(item);
      console.log(i+' is in array '+isInArray);
      console.log('Length of articleList2: '+articleList2.length)
    }

    isInArray = articleList2.indexOf(item) !== -1;
    if(!isInArray && item.doi.includes(searchText)){
      console.log('Search: '+searchText+' title: '+item.doi);
      articleList2.push(item);
      console.log(i+' is in array '+isInArray);
      console.log('Length of articleList2: '+articleList2.length)
    }

    i++;
  });
  

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
    articleList2.length > 0 &&
    articleList2.map((row) => ({
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

  //testing array
  if(articleList.length !== 0){
  //const articleList2 = [];
  console.log('TEST: '+articleList[0].title);
  }



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
      <div>
      </div>
    </body>
  );
};
export default SearchArticle;