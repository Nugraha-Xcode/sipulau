FROM osgeo/gdal:ubuntu-small-3.4.0

RUN apt update && apt install python3-pip -y && pip3 install --upgrade pip

WORKDIR /app

COPY requirements.txt .

RUN pip3 install -r requirements.txt

COPY src/ .

EXPOSE 8000

CMD ["gunicorn", "-w", "4", "-k", "uvicorn.workers.UvicornWorker", "main:app", "-b", "0.0.0.0:8000"]
