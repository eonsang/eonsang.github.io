import Series from '@/components/series/Series'
import React from 'react'

const DeployStatisSiteSeries = () => {
  return (
    <Series
      series={[
        {
          name: 'nextjs의 Static Exports를 통한 S3 정적 웹 사이트 호스팅',
          link: '/blog/deploy-static-site/deploy-s3',
        },
        {
          name: 'cloudfront를 통한 정적페이지 접근과, cloundfront를 사용하는 이유',
        },
        {
          name: 'github action을 통한 배포 자동화',
        },
      ]}
      index={0}
    />
  )
}

export default DeployStatisSiteSeries
