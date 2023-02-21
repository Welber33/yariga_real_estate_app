import { useList } from "@pankod/refine-core"
import { Box, Stack, Typography } from "@pankod/refine-mui"

import { PieChart, PropertyReferrals, TotalRevenue, PropertyCard, TopAgent } from "components"

export default function home() {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for sale"
          value={684}
          series={[75, 25]}
          colors={["#8257e5", "#e4e8ef"]}
        />

        <PieChart
          title="Properties for rent"
          value={550}
          series={[60, 40]}
          colors={["#5161ef", "#edf0f5"]}
        />

        <PieChart
          title="Total customers"
          value={5684}
          series={[75, 25]}
          colors={["#82e575", "#e4e8ef"]}
        />

        <PieChart
          title="Properties for cities"
          value={555}
          series={[75, 25]}
          colors={["#848fef", "#e4e8ef"]}
        />
      </Box>

      <Stack mt="25px" width="100%" direction={{ xs: "column", lg: "row"}} gap={4}>
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  )
}
