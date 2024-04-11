import requests
from bs4 import BeautifulSoup
import json

# Визначте URL веб-сторінки для парсингу
url = 'https://vapehub.org.ua/'

# Відправте запит та отримайте HTML-відповідь
response = requests.get(url)
html = response.content

# Створіть об'єкт BeautifulSoup для аналізу HTML
soup = BeautifulSoup(html, 'html.parser')

# Знайдіть всі `div` блоки з певним класом
divs = soup.find_all('div', class_='caption dflex flex-column flex-grow-1')

# Ініціалізувати порядковий номер для id
id_counter = 1

# Витягніть інформацію з кожного блоку
pods_info = []
for div in divs:
    # Знайдіть контейнер, який містить зображення, назву продукту та опис
    image_container = div.parent.find('img', class_='img-responsive')
    product_image = image_container['src'] if image_container else 'Недоступно'
    product_name = div.find('div', class_='product-name').get_text(strip=True) if div.find('div', class_='product-name') else 'Недоступно'
    product_description = div.find('div', class_='product-description').get_text(strip=True) if div.find('div', class_='product-description') else 'Недоступно'
    price = div.find('div', class_='price').get_text(strip=True) if div.find('div', class_='price') else 'Недоступно'
    # Додайте цю інформацію до словника з id
    pods_info.append({
        'id': id_counter,
        'product_name': product_name,
        'product_description': product_description,
        'product_image': product_image,
        'price': price

    })
    
    # Збільшення id_counter для наступного продукту
    id_counter += 1

# Створіть кінцевий словник для JSON
result = {'pods_info': pods_info}

# Вкажіть шлях до файлу на вашому комп'ютері
local_path = 'C:\\Users\\38098\\vapehub\\parser\\parsed_data1.json'  # Оновіть цей шлях

# Запакуйте інформацію в JSON та збережіть у файл
with open(local_path, 'w', encoding='utf-8') as json_file:
    json.dump(result, json_file, ensure_ascii=False, indent=4)

print('JSON файл був успішно створений.')
