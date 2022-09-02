import axios from "axios"

const ServerUrl = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001'
const UseMockData = true
const Method = {
  POST: 'post',
  GET: 'get',
}

const getRequest = (path, data, method) => {

}

export const getFoundationList = async (keyword) => {
  const mock = [
    { id: 1, email: 'cupcake@gmail.com', info: '-' },
    { id: 2, email: 'donut@gmail.com', info: '-' },
    { id: 3, email: 'eclair@gmail.com', info: '-' },
    { id: 4, email: 'frozen-yoghurt@gmail.com', info: '-' },
    { id: 5, email: 'gingerbread@gmail.com', info: '-' },
    { id: 6, email: 'honeycomb@gmail.com', info: '-' },
    { id: 7, email: 'ice-cream@gmail.com', info: '-' },
    { id: 8, email: 'jelly-bean@gmail.com', info: '-' },
    { id: 9, email: 'kitKat@gmail.com', info: '-' },
    { id: 10, email: 'lollipop@gmail.com', info: '-' },
    { id: 11, email: 'marshmallow@gmail.com', info: '-' },
    { id: 12, email: 'nougat@gmail.com', info: '-' }
  ]
  
  const res = !UseMockData ? await getRequest('get_foundation_list', { keyword: keyword }, Method.GET) : mock
  
  return res
}

export const saveFoundationData = async (data) => {
  const res = !UseMockData ? await getRequest('save_foundation', data, Method.POST) : { success: true }
  return res
}

export const deleteFoundationData = async (id) => {
  const res = !UseMockData ? await getRequest('save_foundation', {id: id}, Method.POST) : { success: true }
  return res
}

export const getNonprofitList = async (keyword) => {
  const mock = [
    { id: 1, email: 'cupcake@gmail.com', info: '-' },
    { id: 2, email: 'donut@gmail.com', info: '-' },
    { id: 3, email: 'eclair@gmail.com', info: '-' },
    { id: 4, email: 'frozen-yoghurt@gmail.com', info: '-' },
    { id: 5, email: 'gingerbread@gmail.com', info: '-' },
    { id: 6, email: 'honeycomb@gmail.com', info: '-' },
    { id: 7, email: 'ice-cream@gmail.com', info: '-' },
    { id: 8, email: 'jelly-bean@gmail.com', info: '-' },
    { id: 9, email: 'kitKat@gmail.com', info: '-' },
    { id: 10, email: 'lollipop@gmail.com', info: '-' },
    { id: 11, email: 'marshmallow@gmail.com', info: '-' },
    { id: 12, email: 'nougat@gmail.com', info: '-' }
  ]
  
  const res = !UseMockData ? await getRequest('get_nonprofit_list', { keyword: keyword }, Method.GET) : mock
  
  return res
}

export const saveNonprofitData = async (data) => {
  const res = !UseMockData ? await getRequest('save_nonprofit', data, Method.POST) : { success: true }
  return res
}

export const deleteNonprofitData = async (id) => {
  const res = !UseMockData ? await getRequest('save_nonprofit', {id: id}, Method.POST) : { success: true }
  return res
}

