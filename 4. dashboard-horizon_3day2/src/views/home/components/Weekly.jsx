import { Card, CardBody, CardHeader } from '@chakra-ui/react'
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent } from '../../../variables/charts'
import LineChart from '../../../components/charts/LineChart'
import { TitleH2 } from '../../../components/common/Title'

const Weekly = () => {
    return (
        <Card display={'flex'}>
            <CardHeader>
                <TitleH2>Weekly Revenue</TitleH2>
            </CardHeader>
            <CardBody>
                <LineChart chartData={lineChartDataTotalSpent} chartOptions={lineChartOptionsTotalSpent} />
            </CardBody>
        </Card>
    )
}

export default Weekly
