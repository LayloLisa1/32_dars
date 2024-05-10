/*
CREATE TABLE telefon(
    telefon_id SERIAL PRIMARY KEY,
    model VARCHAR(100),
    narxi FLOAT,
    ishlab_chiqaruvchi VARCHAR(100),
    xotira INT
);


CREATE TABLE mijoz(
    mijoz_id SERIAL PRIMARY KEY,
    ism VARCHAR(100),
    familiya VARCHAR(100),
    telefon VARCHAR(20) UNIQUE NOT NULL
);
CREATE TABLE Xodimlar (
    xodim_id SERIAL PRIMARY KEY,
    ism VARCHAR(100),
    familiya VARCHAR(100),
    lavozimi VARCHAR(100)
);

CREATE TABLE sotuv (
    sotuv_id SERIAL PRIMARY KEY,
    telefon_id INT,
    mijoz_id INT,
    xodim_id INT,
    sotuv_sanasi TIMESTAMP,
    miqdori INT,
    umumiy_narx FLOAT,
    FOREIGN KEY (telefon_id) REFERENCES Telefonlar(telefon_id),
    FOREIGN KEY (mijoz_id) REFERENCES Mijozlar(mijoz_id),
    FOREIGN KEY (xodim_id) REFERENCES Xodimlar(xodim_id)
);



1.
SELECT ishlab_chiqaruvchi, AVG(narxi) AS o'rtacha_narx
FROM Telefonlar
GROUP BY ishlab_chiqaruvchi;

2.
SELECT mijoz_id, COUNT(*) AS sotib_olgan_telefonlar_soni
FROM Sotuvlar
GROUP BY mijoz_id;

3.
SELECT xodim_id, COUNT(*) AS sotuvlar_soni
FROM Sotuvlar
GROUP BY xodim_id
ORDER BY sotuvlar_soni DESC
LIMIT 1;

4.
SELECT model, narxi
FROM Telefonlar
ORDER BY narxi
OFFSET 4
LIMIT 5;

5.
SELECT ishlab_chiqaruvchi, AVG(narxi) AS o'rtacha_narx, MIN(narxi) AS eng_arzon, MAX(narxi) AS eng_qimmat
FROM Telefonlar
GROUP BY ishlab_chiqaruvchi;

6.
SELECT ishlab_chiqaruvchi, model, MAX(xotira) AS eng_ko'p_xotira
FROM Telefonlar
GROUP BY ishlab_chiqaruvchi;

7.
SELECT Telefonlar.model, AVG(Sotuvlar.umumiy_narx) AS o'rtacha_narx, COUNT(Sotuvlar.sotuv_id) AS sotilgan_telefonlar_soni
FROM Telefonlar
JOIN Sotuvlar ON Telefonlar.telefon_id = Sotuvlar.telefon_id
GROUP BY Telefonlar.model
ORDER BY sotilgan_telefonlar_soni DESC;

*/
