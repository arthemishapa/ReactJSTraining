import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Grid } from '@mui/material';

const clientColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'contactName', headerName: 'Contact name', width: 130 },
    { field: 'contactEmail', headerName: 'Contact email', width: 130 },
    { field: 'taxCode', headerName: 'Tax code', width: 130 },
    { field: 'iban', headerName: 'Iban', width: 130 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'userId', headerName: 'User Id', width: 130 },
    { field: 'totalBilled', headerName: 'Total billed', type: 'number', width: 90 },
    { field: 'invoiceCount', headerName: 'Invoice count', type: 'number', width: 90 }
];

const invoiceColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'dueDate', headerName: 'Due date', width: 130 },
    { field: 'total', headerName: 'Total', type: 'number', width: 90 },
    { field: 'clientId', headerName: 'Client Id', width: 130 },
    { field: 'companyName', headerName: 'Company name', width: 130 },
    { field: 'contactName', headerName: 'Contact name', width: 130 },
    { field: 'contactEmail', headerName: 'Contact email', width: 130 }
];
  

const clientsResult = {
    total: 22,
    skip: 0,
    limit: 5,
    results: [
      {
        id: "1b2a76d1-ae43-4ea5-b697-f4f2a4dcbebc",
        name: "Jones, Reinger and Howell",
        contactName: "Megan Stanton",
        contactEmail: "Kyra_Dare@hotmail.com",
        taxCode: "FBPAAXZ1",
        iban: "RO24TJIK6V85R820654Q2F40",
        address: "3529 Ebony Vista, Baltimore Turkey",
        userId: "f057ab65-b802-475d-8378-edfeb8f35334",
        totalBilled: 3868,
        invoiceCount: 3
      },
      {
        id: "280238f4-06d1-4874-9a99-27fb6acc2dc7",
        name: "Keeling Group",
        contactName: "Silvia Dare",
        contactEmail: "Lane.Walker@gmail.com",
        taxCode: "QPHASXM1",
        iban: "GI93DQFM11A91432X8L3114",
        address: "61225 Tremayne Trace, Ronaldomouth Cocos (Keeling) Islands",
        userId: "f057ab65-b802-475d-8378-edfeb8f35334",
        totalBilled: 37554,
        invoiceCount: 28
      },
      {
        id: "2b65b15b-5f65-4eb5-a81f-5b7e7afd868b",
        name: "Trantow, Miller and Yost",
        contactName: "Dorothy Bailey",
        contactEmail: "Maiya_Murphy12@yahoo.com",
        taxCode: "FLZUBDH1CUQ",
        iban: "RS49004400505500750798",
        address: "2503 Gusikowski Loaf, Merlinview Grenada",
        userId: "f057ab65-b802-475d-8378-edfeb8f35334",
        totalBilled: 33454,
        invoiceCount: 27
      },
      {
        id: "2c4d5223-066c-448b-8c3c-fd3de2e307b7",
        name: "Prosacco - Zboncak",
        contactName: "Marlene Hodkiewicz",
        contactEmail: "Loraine_Lindgren@gmail.com",
        taxCode: "CDUIOMR1",
        iban: "SA293220F1307XV4NA3M4743",
        address: "63487 Camren Parkways, Bednarhaven Yemen",
        userId: "f057ab65-b802-475d-8378-edfeb8f35334",
        totalBilled: 1557,
        invoiceCount: 2
      },
      {
        id: "3e48c99f-e762-4a76-894d-a6baea613a81",
        name: "Dicki, Koss and Hegmann",
        contactName: "Walter Pollich",
        contactEmail: "Ara51@gmail.com",
        taxCode: "WUVISAI1351",
        iban: "BR4030070050570611090080096Y9",
        address: "9201 Goldner Station, Port Kelsistad Virgin Islands, U.S.",
        userId: "f057ab65-b802-475d-8378-edfeb8f35334",
        totalBilled: 30978,
        invoiceCount: 25
      },
      {
        id: "3e48c99f-e762-4a76-894d-a6baea613a81",
        name: "Dicki, Koss and Hegmann",
        contactName: "Walter Pollich 2",
        contactEmail: "Ara512@gmail.com",
        taxCode: "WUVISAI1351",
        iban: "BR4030070050570611090080096Y9",
        address: "9201 Goldner Station, Port Kelsistad Virgin Islands, U.S.",
        userId: "f057ab65-b802-475d-8378-edfeb8f35334",
        totalBilled: 30978,
        invoiceCount: 25
      }
    ]
}

const invoicesResult = {
    results: [
      {
        id: "8d4864d9-16e0-4a6d-8434-77fcf9278430",
        date: "1649898593451",
        dueDate: "1649990667218",
        total: 3923,
        clientId: "52a976e8-7e91-4bfe-a7e4-a80d6a1f4185",
        companyName: "Macejkovic Group",
        contactName: "Jill Lesch",
        contactEmail: "Felicita_Orn@gmail.com"
      },
      {
        id: "11dd9997-029b-445e-b5f0-b2214ad9d9c7",
        date: "1649908146971",
        dueDate: "1650011833214",
        total: 3757,
        clientId: "b4268f8e-6732-419a-b0f8-ee6f1f644e21",
        companyName: "Altenwerth Inc",
        contactName: "Brandi Hamill",
        contactEmail: "Obie.Thiel@yahoo.com"
      },
      {
        id: "52d1c55d-e398-4b4d-9b56-d9452bf15bfe",
        date: "1649879984651",
        dueDate: "1649984394640",
        total: 3737,
        clientId: "443e32b8-9b47-43da-81a0-1db80d786aa1",
        companyName: "Fritsch, Brakus and Mueller",
        contactName: "Kristie Mills",
        contactEmail: "Triston.Keebler@yahoo.com"
      },
      {
        id: "c1759b52-f4da-4d4c-ac67-98a507a18d0d",
        date: "1649871541756",
        dueDate: "1649970573926",
        total: 3715,
        clientId: "b4074523-1dd0-4634-89e6-09d468abe860",
        companyName: "McLaughlin, Sipes and Mayert",
        contactName: "Javier Jerde",
        contactEmail: "Jessy6@hotmail.com"
      },
      {
        id: "35441309-204a-4190-8ab6-67d008389832",
        date: "1649864157029",
        dueDate: "1649992924727",
        total: 3632,
        clientId: "52a976e8-7e91-4bfe-a7e4-a80d6a1f4185",
        companyName: "Macejkovic Group",
        contactName: "Jill Lesch",
        contactEmail: "Felicita_Orn@gmail.com"
      }
    ],
    total: 339,
    skip: 0,
    limit: 5
}

type queryResults = {
    total: number,
    skip: number,
    limit: number,
    results: any[]
}

type data = {
    children: React.ReactNode,
    data: queryResults
}

const ClientsGrid = (props: data) => {
    return (
        <div id="clientGrid" style={{ height: 400 }} >
            <DataGrid
                rows={props.data.results}
                columns={clientColumns}
                pageSize={props.data.limit}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

const InvoicesGrid = (props: data) => {
    return (
        <div id="invoiceGrid" style={{ height: 400 }}>
            <DataGrid
                rows={props.data.results}
                columns={invoiceColumns}
                pageSize={props.data.limit}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default function Dashboard() {
  return (
    <Grid 
        container
        spacing={{ xs: 1, md: 2 }} 
        columns={{ xs: 4, md: 12 }}
    >
        <Grid item xs={4} md={6}>
            <ClientsGrid data={clientsResult}>
            </ClientsGrid>
        </Grid>
        <Grid item xs={4} md={6}>
            <InvoicesGrid data={invoicesResult}>
            </InvoicesGrid>
        </Grid>
    </Grid>
  );
}