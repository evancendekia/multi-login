import React from 'react'
import { Box, Grid, useTheme } from '@mui/material'
import { tokens } from "../../theme";
import Header from "../../components/Header"
import {HomeOutlined, PeopleOutlined, ContactsOutlined, ReceiptOutlined, PersonOutlined, CalendarTodayOutlined, HelpOutlineOutlined, BarChartOutlined, PieChartOutlineOutlined, TimelineOutlined, MenuOutlined, MapOutlined} from '@mui/icons-material'
import MediaCard from '../../components/MediaCard'
const Index = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  console.log('colors',colors)
  const data = [
    {
      title: 'Alpha Login'
    },{
      title: 'Beta Login'
    },{
      title: 'Gamma Login'
    },{
      title: 'Delta Login'
    },
  ]
  return (
    <Box m="20px">
      <Box display="flex" justifyContrent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Get your favorite login page" />
      </Box>
      
      <Box display="flex" justifyContrent="space-between" alignItems="center" sx={{mt:2}} >
        <Grid container spacing={2}>
          {data.map(item => {
            return (
              <Grid item xs={3}>
                <MediaCard data={item} colors={colors}/>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}

export default Index
