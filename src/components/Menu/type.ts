export interface MenuItemType {
  title: string
  name: string
  path: string
  children?: MenuItemType[]
  [propName: string]: any
}
