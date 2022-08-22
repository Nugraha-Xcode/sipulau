FROM osgeo/gdal:ubuntu-small-3.4.0

# ENV HTTP_PROXY="http://192.168.1.28:3128"
# ENV HTTPS_PROXY="http://192.168.1.28:3128"

# RUN echo "Acquire::http::Proxy \"http://192.168.1.28:3128\";" >> /etc/apt/apt.conf

RUN apt update && apt install python3-pip -y && pip3 install --upgrade pip

WORKDIR /app

COPY requirements.txt .

RUN pip3 install -r requirements.txt

COPY src/ .

EXPOSE 8000

CMD ["gunicorn", "-w", "4", "-k", "uvicorn.workers.UvicornWorker", "main:app", "-b", "0.0.0.0:8000"]
