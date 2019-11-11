export interface Department {
    'department_id': number,
    'name': string,
    'description': string
  }

export interface Category {
    'category_id': number,
    'name': string,
    'description': string,
    'department_id': number
}
  