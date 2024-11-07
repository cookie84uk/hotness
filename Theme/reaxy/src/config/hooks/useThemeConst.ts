import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { layoutSize } from '@config/constant'

const useThemeConstants = () => {
  const { drawerWidth } = useSelector((state: RootState) => state.palette)

  // ** CUSTOMIZE
  const DEFAULT = React.useMemo(
    () => drawerWidth === layoutSize.DRAWER_WIDTH.DEFAULT,
    [drawerWidth, layoutSize]
  )
  const COMPACT = React.useMemo(
    () => drawerWidth === layoutSize.DRAWER_WIDTH.COMPACT,
    [drawerWidth, layoutSize]
  )
  const MINI = React.useMemo(
    () => drawerWidth === layoutSize.DRAWER_WIDTH.MINI,
    [drawerWidth, layoutSize]
  )

  return {
    DEFAULT,
    COMPACT,
    MINI,
  }
}

export default useThemeConstants
