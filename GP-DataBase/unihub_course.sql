CREATE DATABASE  IF NOT EXISTS `unihub` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `unihub`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: unihub
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `courseID` int NOT NULL AUTO_INCREMENT,
  `courseName` varchar(50) DEFAULT NULL,
  `courseDesc` text,
  `instructorId` int DEFAULT NULL,
  `credtHours` int DEFAULT NULL,
  `courseCode` varchar(10) DEFAULT NULL,
  `passKey` varchar(50) DEFAULT NULL,
  `coursePhoto` text,
  PRIMARY KEY (`courseID`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (1,'Course 1','Description 1',101,3,'CSE101','passKey1','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/1/photo-1720314760190.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=LGDSUhTKJdy%2Bh9YOWGI3pvn1WpsoEJQl6qrzIc%2Ffq%2Bg38FIxN8xKMrvtrVbIVWbKoRDgMQicvu38IgPbbboGL9gNVUHPGTc8%2FRO0K45KoWXVDRtz8qLh8crQWd%2FHAiLb03rR6f4PcVzPePpgvlllWTbKwSjRvoYcVMmum2PX%2Bzi1TyVMDu%2FTtjbLageac1E6KUE3ncP4Qyo0RE99OFC0eD2HsHNNfz6hkkT3tkcWFN%2F5LHu0rxdq%2FPsDN5iXTGWjr8rjzTImM0MGtBeFbUlYgRvPN%2FgCT%2BJBYxE9RgPlo80eKnB5dNCfeiOmfFJUs%2BnRHLfOpIU0m1cZigZifoIqpA%3D%3D'),(2,'Course 2','Description 2',102,3,'CSE102','passKey2','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/2/photo-1720314739417.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=gkUi3oI0kKOiEPkgzIvE8LnydwHuxuV5Yj5s6%2FHzca0oWisUVOpmwQbWKpjbpRx0R6Las1jotSexZTj0Hd3fkN5wqA5S%2FTyaT%2FaAb3MasFyiV1U7%2FaHQUBiKONN36F4NCJ2ZjQGeNrziSzNPNkjTLUxEowJWqGyACoEZmPNbH4xLVLsUgu4D%2FtihjjGfB6wFAZeXSs2JwzFQkbwhbzU3B1QrkkqfMb2AfHIc1GwOHnW4NJJcFX5picaH9ByTWkQ%2Fb4f0HeD4I%2Fl2P6HdTQizPtsRxSw%2Bn137HLy6tKMtfRZ9Oy8gEraBKHUl0d2zgN2%2FMxJWrS2zKCTCS9w1SNgLTQ%3D%3D'),(3,'Course 3','Description 3',103,3,'CSE103','passKey3','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/3/photo-1720314772613.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=hBo3VPVNBcjtDmU%2BAdqhUdL3IxGix2XV0v0F8IctkHr%2FHaZNPe7rdP2M%2BSdzeMOejOg0sgpersQK6tQrGIczMgiQgYw76%2BBEW2XtfzNGxhZlBkYz7PJxOzfYGyYpQ66fEIwI6pI6QBVRk%2Btv4M4BxtV9G%2Fp3UdIieTdsuon9aU0InGS11OIz4u5quiV6Xvu3vA3%2FvOyd0EVD9v9Jmtf8Fz3PNXsXuiaIj1dYKtdaRsgNRv0W41Md2CLqQbX3id%2BvTJFso6veMRnGYc7rNatv2TdYfOA3AAfaF8UrKLcB2eeQ65M78xoSLq%2FEQE0MWjtJZB9JUfexqCR7%2Bk09MeU2Ew%3D%3D'),(4,'Course 4','Description 4',104,3,'CSE104','passKey4','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/4/photo-1720314810192.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=Gece251YqHg5U5bzwFhbHYixZA8PitI%2B1TiE1ScLph6UxOerP%2BwmxYkkW6vrWp%2FqoZfhHzMMQwucOtEpEoVdiCV1CYRsuvAm0yidDD7uz8CBKrKWJIf1pz%2B4vKxzd%2FSp%2FT2pVzA%2BN1fo4OSH%2Br7CUS5TjS1U0ilcod2si2prmfY3uvNmeKO%2FGFrJCnRXomxXhSQq%2FItAcp%2BFCVT5Tt7PDbxE2QTOW6wX3Ejaxg0DXV3P6serR6VYuXTapHI9QAhtMaJeWl8WZL0Ww2dK0an2R0GAPbQNMkaSlnCGwGkxHggt%2FX3TqsUo02JPOfqK8IVkO1zD0Azu4dVVDgeEgC3MDQ%3D%3D'),(5,'Course 5','Description 5',105,3,'CSE105','passKey5','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/5/photo-1720314865545.png?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=gMzbnbTJf9RtiqXY7LVfbW349ZpgF8BGfqYKA4qUfWxaS%2BzNsm8rjYtMir9m%2Bjm2BvJIcX10yL5Wg%2FyRYtevzFiHVEzHa3vSHEqY4wZ43B49bM8EB53GiFG3IITqFNjfj3%2F1XfboZ82SzV6e23279vpnWeFysMELlUBygZNTrlyT2vIgU20h4VLmm8i4sH4J7jRexmP5Vggla8oXt3HYOiP3s1y0ChNgjxv7tPMmMM1SE%2FI0FstKS0t%2B5Hu%2FHr1xMgprXI%2Bh0k0BtuxkG3WgXKV46iU9eA4tzUE7crwv%2Fd6eZ%2FE2jzpAn2AYbxZEqt%2FslV1H5kpNCz3hanoYqdjp8A%3D%3D'),(6,'Course 6','Description 6',106,3,'CSE106','passKey6','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/5/photo-1720314865545.png?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=gMzbnbTJf9RtiqXY7LVfbW349ZpgF8BGfqYKA4qUfWxaS%2BzNsm8rjYtMir9m%2Bjm2BvJIcX10yL5Wg%2FyRYtevzFiHVEzHa3vSHEqY4wZ43B49bM8EB53GiFG3IITqFNjfj3%2F1XfboZ82SzV6e23279vpnWeFysMELlUBygZNTrlyT2vIgU20h4VLmm8i4sH4J7jRexmP5Vggla8oXt3HYOiP3s1y0ChNgjxv7tPMmMM1SE%2FI0FstKS0t%2B5Hu%2FHr1xMgprXI%2Bh0k0BtuxkG3WgXKV46iU9eA4tzUE7crwv%2Fd6eZ%2FE2jzpAn2AYbxZEqt%2FslV1H5kpNCz3hanoYqdjp8A%3D%3D'),(7,'Course 7','Description 7',107,3,'CSE107','passKey7','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/4/photo-1720314810192.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=Gece251YqHg5U5bzwFhbHYixZA8PitI%2B1TiE1ScLph6UxOerP%2BwmxYkkW6vrWp%2FqoZfhHzMMQwucOtEpEoVdiCV1CYRsuvAm0yidDD7uz8CBKrKWJIf1pz%2B4vKxzd%2FSp%2FT2pVzA%2BN1fo4OSH%2Br7CUS5TjS1U0ilcod2si2prmfY3uvNmeKO%2FGFrJCnRXomxXhSQq%2FItAcp%2BFCVT5Tt7PDbxE2QTOW6wX3Ejaxg0DXV3P6serR6VYuXTapHI9QAhtMaJeWl8WZL0Ww2dK0an2R0GAPbQNMkaSlnCGwGkxHggt%2FX3TqsUo02JPOfqK8IVkO1zD0Azu4dVVDgeEgC3MDQ%3D%3D'),(8,'Course 8','Description 8',108,3,'CSE108','passKey8','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/1/photo-1720314760190.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=LGDSUhTKJdy%2Bh9YOWGI3pvn1WpsoEJQl6qrzIc%2Ffq%2Bg38FIxN8xKMrvtrVbIVWbKoRDgMQicvu38IgPbbboGL9gNVUHPGTc8%2FRO0K45KoWXVDRtz8qLh8crQWd%2FHAiLb03rR6f4PcVzPePpgvlllWTbKwSjRvoYcVMmum2PX%2Bzi1TyVMDu%2FTtjbLageac1E6KUE3ncP4Qyo0RE99OFC0eD2HsHNNfz6hkkT3tkcWFN%2F5LHu0rxdq%2FPsDN5iXTGWjr8rjzTImM0MGtBeFbUlYgRvPN%2FgCT%2BJBYxE9RgPlo80eKnB5dNCfeiOmfFJUs%2BnRHLfOpIU0m1cZigZifoIqpA%3D%3D'),(9,'Course 9','Description 9',109,3,'CSE109','passKey9','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/3/photo-1720314772613.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=hBo3VPVNBcjtDmU%2BAdqhUdL3IxGix2XV0v0F8IctkHr%2FHaZNPe7rdP2M%2BSdzeMOejOg0sgpersQK6tQrGIczMgiQgYw76%2BBEW2XtfzNGxhZlBkYz7PJxOzfYGyYpQ66fEIwI6pI6QBVRk%2Btv4M4BxtV9G%2Fp3UdIieTdsuon9aU0InGS11OIz4u5quiV6Xvu3vA3%2FvOyd0EVD9v9Jmtf8Fz3PNXsXuiaIj1dYKtdaRsgNRv0W41Md2CLqQbX3id%2BvTJFso6veMRnGYc7rNatv2TdYfOA3AAfaF8UrKLcB2eeQ65M78xoSLq%2FEQE0MWjtJZB9JUfexqCR7%2Bk09MeU2Ew%3D%3D'),(10,'Course 10','Description 10',110,3,'CSE110','passKey10','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/2/photo-1720314739417.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=gkUi3oI0kKOiEPkgzIvE8LnydwHuxuV5Yj5s6%2FHzca0oWisUVOpmwQbWKpjbpRx0R6Las1jotSexZTj0Hd3fkN5wqA5S%2FTyaT%2FaAb3MasFyiV1U7%2FaHQUBiKONN36F4NCJ2ZjQGeNrziSzNPNkjTLUxEowJWqGyACoEZmPNbH4xLVLsUgu4D%2FtihjjGfB6wFAZeXSs2JwzFQkbwhbzU3B1QrkkqfMb2AfHIc1GwOHnW4NJJcFX5picaH9ByTWkQ%2Fb4f0HeD4I%2Fl2P6HdTQizPtsRxSw%2Bn137HLy6tKMtfRZ9Oy8gEraBKHUl0d2zgN2%2FMxJWrS2zKCTCS9w1SNgLTQ%3D%3D'),(11,'Course 11','Description 11',111,3,'CSE111','passKey11','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/5/photo-1720314865545.png?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=gMzbnbTJf9RtiqXY7LVfbW349ZpgF8BGfqYKA4qUfWxaS%2BzNsm8rjYtMir9m%2Bjm2BvJIcX10yL5Wg%2FyRYtevzFiHVEzHa3vSHEqY4wZ43B49bM8EB53GiFG3IITqFNjfj3%2F1XfboZ82SzV6e23279vpnWeFysMELlUBygZNTrlyT2vIgU20h4VLmm8i4sH4J7jRexmP5Vggla8oXt3HYOiP3s1y0ChNgjxv7tPMmMM1SE%2FI0FstKS0t%2B5Hu%2FHr1xMgprXI%2Bh0k0BtuxkG3WgXKV46iU9eA4tzUE7crwv%2Fd6eZ%2FE2jzpAn2AYbxZEqt%2FslV1H5kpNCz3hanoYqdjp8A%3D%3D'),(12,'Course 12','Description 12',112,3,'CSE112','passKey12','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/2/photo-1720314739417.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=gkUi3oI0kKOiEPkgzIvE8LnydwHuxuV5Yj5s6%2FHzca0oWisUVOpmwQbWKpjbpRx0R6Las1jotSexZTj0Hd3fkN5wqA5S%2FTyaT%2FaAb3MasFyiV1U7%2FaHQUBiKONN36F4NCJ2ZjQGeNrziSzNPNkjTLUxEowJWqGyACoEZmPNbH4xLVLsUgu4D%2FtihjjGfB6wFAZeXSs2JwzFQkbwhbzU3B1QrkkqfMb2AfHIc1GwOHnW4NJJcFX5picaH9ByTWkQ%2Fb4f0HeD4I%2Fl2P6HdTQizPtsRxSw%2Bn137HLy6tKMtfRZ9Oy8gEraBKHUl0d2zgN2%2FMxJWrS2zKCTCS9w1SNgLTQ%3D%3D'),(13,'Course 13','Description 13',113,3,'CSE113','passKey13','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/1/photo-1720314760190.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=LGDSUhTKJdy%2Bh9YOWGI3pvn1WpsoEJQl6qrzIc%2Ffq%2Bg38FIxN8xKMrvtrVbIVWbKoRDgMQicvu38IgPbbboGL9gNVUHPGTc8%2FRO0K45KoWXVDRtz8qLh8crQWd%2FHAiLb03rR6f4PcVzPePpgvlllWTbKwSjRvoYcVMmum2PX%2Bzi1TyVMDu%2FTtjbLageac1E6KUE3ncP4Qyo0RE99OFC0eD2HsHNNfz6hkkT3tkcWFN%2F5LHu0rxdq%2FPsDN5iXTGWjr8rjzTImM0MGtBeFbUlYgRvPN%2FgCT%2BJBYxE9RgPlo80eKnB5dNCfeiOmfFJUs%2BnRHLfOpIU0m1cZigZifoIqpA%3D%3D'),(14,'Course 14','Description 14',114,3,'CSE114','passKey14','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/5/photo-1720314865545.png?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=gMzbnbTJf9RtiqXY7LVfbW349ZpgF8BGfqYKA4qUfWxaS%2BzNsm8rjYtMir9m%2Bjm2BvJIcX10yL5Wg%2FyRYtevzFiHVEzHa3vSHEqY4wZ43B49bM8EB53GiFG3IITqFNjfj3%2F1XfboZ82SzV6e23279vpnWeFysMELlUBygZNTrlyT2vIgU20h4VLmm8i4sH4J7jRexmP5Vggla8oXt3HYOiP3s1y0ChNgjxv7tPMmMM1SE%2FI0FstKS0t%2B5Hu%2FHr1xMgprXI%2Bh0k0BtuxkG3WgXKV46iU9eA4tzUE7crwv%2Fd6eZ%2FE2jzpAn2AYbxZEqt%2FslV1H5kpNCz3hanoYqdjp8A%3D%3D'),(15,'Course 15','Description 15',115,3,'CSE115','passKey15','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/3/photo-1720314772613.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=hBo3VPVNBcjtDmU%2BAdqhUdL3IxGix2XV0v0F8IctkHr%2FHaZNPe7rdP2M%2BSdzeMOejOg0sgpersQK6tQrGIczMgiQgYw76%2BBEW2XtfzNGxhZlBkYz7PJxOzfYGyYpQ66fEIwI6pI6QBVRk%2Btv4M4BxtV9G%2Fp3UdIieTdsuon9aU0InGS11OIz4u5quiV6Xvu3vA3%2FvOyd0EVD9v9Jmtf8Fz3PNXsXuiaIj1dYKtdaRsgNRv0W41Md2CLqQbX3id%2BvTJFso6veMRnGYc7rNatv2TdYfOA3AAfaF8UrKLcB2eeQ65M78xoSLq%2FEQE0MWjtJZB9JUfexqCR7%2Bk09MeU2Ew%3D%3D'),(16,'Course 16','Description 16',116,3,'CSE116','passKey16','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/2/photo-1720314739417.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=gkUi3oI0kKOiEPkgzIvE8LnydwHuxuV5Yj5s6%2FHzca0oWisUVOpmwQbWKpjbpRx0R6Las1jotSexZTj0Hd3fkN5wqA5S%2FTyaT%2FaAb3MasFyiV1U7%2FaHQUBiKONN36F4NCJ2ZjQGeNrziSzNPNkjTLUxEowJWqGyACoEZmPNbH4xLVLsUgu4D%2FtihjjGfB6wFAZeXSs2JwzFQkbwhbzU3B1QrkkqfMb2AfHIc1GwOHnW4NJJcFX5picaH9ByTWkQ%2Fb4f0HeD4I%2Fl2P6HdTQizPtsRxSw%2Bn137HLy6tKMtfRZ9Oy8gEraBKHUl0d2zgN2%2FMxJWrS2zKCTCS9w1SNgLTQ%3D%3D'),(17,'Course 17','Description 17',117,3,'CSE117','passKey17','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/3/photo-1720314772613.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=hBo3VPVNBcjtDmU%2BAdqhUdL3IxGix2XV0v0F8IctkHr%2FHaZNPe7rdP2M%2BSdzeMOejOg0sgpersQK6tQrGIczMgiQgYw76%2BBEW2XtfzNGxhZlBkYz7PJxOzfYGyYpQ66fEIwI6pI6QBVRk%2Btv4M4BxtV9G%2Fp3UdIieTdsuon9aU0InGS11OIz4u5quiV6Xvu3vA3%2FvOyd0EVD9v9Jmtf8Fz3PNXsXuiaIj1dYKtdaRsgNRv0W41Md2CLqQbX3id%2BvTJFso6veMRnGYc7rNatv2TdYfOA3AAfaF8UrKLcB2eeQ65M78xoSLq%2FEQE0MWjtJZB9JUfexqCR7%2Bk09MeU2Ew%3D%3D'),(18,'Course 18','Description 18',118,3,'CSE118','passKey18','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/1/photo-1720314760190.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=LGDSUhTKJdy%2Bh9YOWGI3pvn1WpsoEJQl6qrzIc%2Ffq%2Bg38FIxN8xKMrvtrVbIVWbKoRDgMQicvu38IgPbbboGL9gNVUHPGTc8%2FRO0K45KoWXVDRtz8qLh8crQWd%2FHAiLb03rR6f4PcVzPePpgvlllWTbKwSjRvoYcVMmum2PX%2Bzi1TyVMDu%2FTtjbLageac1E6KUE3ncP4Qyo0RE99OFC0eD2HsHNNfz6hkkT3tkcWFN%2F5LHu0rxdq%2FPsDN5iXTGWjr8rjzTImM0MGtBeFbUlYgRvPN%2FgCT%2BJBYxE9RgPlo80eKnB5dNCfeiOmfFJUs%2BnRHLfOpIU0m1cZigZifoIqpA%3D%3D'),(19,'Course 19','Description 19',119,3,'CSE119','passKey19','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/3/photo-1720314772613.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=hBo3VPVNBcjtDmU%2BAdqhUdL3IxGix2XV0v0F8IctkHr%2FHaZNPe7rdP2M%2BSdzeMOejOg0sgpersQK6tQrGIczMgiQgYw76%2BBEW2XtfzNGxhZlBkYz7PJxOzfYGyYpQ66fEIwI6pI6QBVRk%2Btv4M4BxtV9G%2Fp3UdIieTdsuon9aU0InGS11OIz4u5quiV6Xvu3vA3%2FvOyd0EVD9v9Jmtf8Fz3PNXsXuiaIj1dYKtdaRsgNRv0W41Md2CLqQbX3id%2BvTJFso6veMRnGYc7rNatv2TdYfOA3AAfaF8UrKLcB2eeQ65M78xoSLq%2FEQE0MWjtJZB9JUfexqCR7%2Bk09MeU2Ew%3D%3D'),(20,'Course 20','Description 20',120,3,'CSE120','passKey20','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/4/photo-1720314810192.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=Gece251YqHg5U5bzwFhbHYixZA8PitI%2B1TiE1ScLph6UxOerP%2BwmxYkkW6vrWp%2FqoZfhHzMMQwucOtEpEoVdiCV1CYRsuvAm0yidDD7uz8CBKrKWJIf1pz%2B4vKxzd%2FSp%2FT2pVzA%2BN1fo4OSH%2Br7CUS5TjS1U0ilcod2si2prmfY3uvNmeKO%2FGFrJCnRXomxXhSQq%2FItAcp%2BFCVT5Tt7PDbxE2QTOW6wX3Ejaxg0DXV3P6serR6VYuXTapHI9QAhtMaJeWl8WZL0Ww2dK0an2R0GAPbQNMkaSlnCGwGkxHggt%2FX3TqsUo02JPOfqK8IVkO1zD0Azu4dVVDgeEgC3MDQ%3D%3D'),(21,'Course 21','Description 21',121,3,'CSE121','passKey21','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/1/photo-1720314760190.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=LGDSUhTKJdy%2Bh9YOWGI3pvn1WpsoEJQl6qrzIc%2Ffq%2Bg38FIxN8xKMrvtrVbIVWbKoRDgMQicvu38IgPbbboGL9gNVUHPGTc8%2FRO0K45KoWXVDRtz8qLh8crQWd%2FHAiLb03rR6f4PcVzPePpgvlllWTbKwSjRvoYcVMmum2PX%2Bzi1TyVMDu%2FTtjbLageac1E6KUE3ncP4Qyo0RE99OFC0eD2HsHNNfz6hkkT3tkcWFN%2F5LHu0rxdq%2FPsDN5iXTGWjr8rjzTImM0MGtBeFbUlYgRvPN%2FgCT%2BJBYxE9RgPlo80eKnB5dNCfeiOmfFJUs%2BnRHLfOpIU0m1cZigZifoIqpA%3D%3D'),(22,'Course 22','Description 22',121,3,'CSE122','passKey22','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/3/photo-1720314772613.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=hBo3VPVNBcjtDmU%2BAdqhUdL3IxGix2XV0v0F8IctkHr%2FHaZNPe7rdP2M%2BSdzeMOejOg0sgpersQK6tQrGIczMgiQgYw76%2BBEW2XtfzNGxhZlBkYz7PJxOzfYGyYpQ66fEIwI6pI6QBVRk%2Btv4M4BxtV9G%2Fp3UdIieTdsuon9aU0InGS11OIz4u5quiV6Xvu3vA3%2FvOyd0EVD9v9Jmtf8Fz3PNXsXuiaIj1dYKtdaRsgNRv0W41Md2CLqQbX3id%2BvTJFso6veMRnGYc7rNatv2TdYfOA3AAfaF8UrKLcB2eeQ65M78xoSLq%2FEQE0MWjtJZB9JUfexqCR7%2Bk09MeU2Ew%3D%3D'),(23,'Course 23','Description 23',121,3,'CSE123','passKey23','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/2/photo-1720314739417.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=gkUi3oI0kKOiEPkgzIvE8LnydwHuxuV5Yj5s6%2FHzca0oWisUVOpmwQbWKpjbpRx0R6Las1jotSexZTj0Hd3fkN5wqA5S%2FTyaT%2FaAb3MasFyiV1U7%2FaHQUBiKONN36F4NCJ2ZjQGeNrziSzNPNkjTLUxEowJWqGyACoEZmPNbH4xLVLsUgu4D%2FtihjjGfB6wFAZeXSs2JwzFQkbwhbzU3B1QrkkqfMb2AfHIc1GwOHnW4NJJcFX5picaH9ByTWkQ%2Fb4f0HeD4I%2Fl2P6HdTQizPtsRxSw%2Bn137HLy6tKMtfRZ9Oy8gEraBKHUl0d2zgN2%2FMxJWrS2zKCTCS9w1SNgLTQ%3D%3D'),(24,'Course 24','Description 24',121,3,'CSE124','passKey24','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/3/photo-1720314772613.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=hBo3VPVNBcjtDmU%2BAdqhUdL3IxGix2XV0v0F8IctkHr%2FHaZNPe7rdP2M%2BSdzeMOejOg0sgpersQK6tQrGIczMgiQgYw76%2BBEW2XtfzNGxhZlBkYz7PJxOzfYGyYpQ66fEIwI6pI6QBVRk%2Btv4M4BxtV9G%2Fp3UdIieTdsuon9aU0InGS11OIz4u5quiV6Xvu3vA3%2FvOyd0EVD9v9Jmtf8Fz3PNXsXuiaIj1dYKtdaRsgNRv0W41Md2CLqQbX3id%2BvTJFso6veMRnGYc7rNatv2TdYfOA3AAfaF8UrKLcB2eeQ65M78xoSLq%2FEQE0MWjtJZB9JUfexqCR7%2Bk09MeU2Ew%3D%3D'),(25,'Course 25','Description 25',121,3,'CSE125','passKey25','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/3/photo-1720314772613.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=hBo3VPVNBcjtDmU%2BAdqhUdL3IxGix2XV0v0F8IctkHr%2FHaZNPe7rdP2M%2BSdzeMOejOg0sgpersQK6tQrGIczMgiQgYw76%2BBEW2XtfzNGxhZlBkYz7PJxOzfYGyYpQ66fEIwI6pI6QBVRk%2Btv4M4BxtV9G%2Fp3UdIieTdsuon9aU0InGS11OIz4u5quiV6Xvu3vA3%2FvOyd0EVD9v9Jmtf8Fz3PNXsXuiaIj1dYKtdaRsgNRv0W41Md2CLqQbX3id%2BvTJFso6veMRnGYc7rNatv2TdYfOA3AAfaF8UrKLcB2eeQ65M78xoSLq%2FEQE0MWjtJZB9JUfexqCR7%2Bk09MeU2Ew%3D%3D'),(26,'Course 26','Description 26',121,3,'CSE126','passKey26','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/4/photo-1720314810192.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=Gece251YqHg5U5bzwFhbHYixZA8PitI%2B1TiE1ScLph6UxOerP%2BwmxYkkW6vrWp%2FqoZfhHzMMQwucOtEpEoVdiCV1CYRsuvAm0yidDD7uz8CBKrKWJIf1pz%2B4vKxzd%2FSp%2FT2pVzA%2BN1fo4OSH%2Br7CUS5TjS1U0ilcod2si2prmfY3uvNmeKO%2FGFrJCnRXomxXhSQq%2FItAcp%2BFCVT5Tt7PDbxE2QTOW6wX3Ejaxg0DXV3P6serR6VYuXTapHI9QAhtMaJeWl8WZL0Ww2dK0an2R0GAPbQNMkaSlnCGwGkxHggt%2FX3TqsUo02JPOfqK8IVkO1zD0Azu4dVVDgeEgC3MDQ%3D%3D'),(27,'Course 27','Description 27',121,3,'CSE127','passKey27','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/3/photo-1720314772613.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=hBo3VPVNBcjtDmU%2BAdqhUdL3IxGix2XV0v0F8IctkHr%2FHaZNPe7rdP2M%2BSdzeMOejOg0sgpersQK6tQrGIczMgiQgYw76%2BBEW2XtfzNGxhZlBkYz7PJxOzfYGyYpQ66fEIwI6pI6QBVRk%2Btv4M4BxtV9G%2Fp3UdIieTdsuon9aU0InGS11OIz4u5quiV6Xvu3vA3%2FvOyd0EVD9v9Jmtf8Fz3PNXsXuiaIj1dYKtdaRsgNRv0W41Md2CLqQbX3id%2BvTJFso6veMRnGYc7rNatv2TdYfOA3AAfaF8UrKLcB2eeQ65M78xoSLq%2FEQE0MWjtJZB9JUfexqCR7%2Bk09MeU2Ew%3D%3D'),(28,'Course 28','Description 28',121,3,'CSE128','passKey28','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/3/photo-1720314772613.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=hBo3VPVNBcjtDmU%2BAdqhUdL3IxGix2XV0v0F8IctkHr%2FHaZNPe7rdP2M%2BSdzeMOejOg0sgpersQK6tQrGIczMgiQgYw76%2BBEW2XtfzNGxhZlBkYz7PJxOzfYGyYpQ66fEIwI6pI6QBVRk%2Btv4M4BxtV9G%2Fp3UdIieTdsuon9aU0InGS11OIz4u5quiV6Xvu3vA3%2FvOyd0EVD9v9Jmtf8Fz3PNXsXuiaIj1dYKtdaRsgNRv0W41Md2CLqQbX3id%2BvTJFso6veMRnGYc7rNatv2TdYfOA3AAfaF8UrKLcB2eeQ65M78xoSLq%2FEQE0MWjtJZB9JUfexqCR7%2Bk09MeU2Ew%3D%3D'),(29,'Course 29','Description 29',121,3,'CSE129','passKey29','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/2/photo-1720314739417.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=gkUi3oI0kKOiEPkgzIvE8LnydwHuxuV5Yj5s6%2FHzca0oWisUVOpmwQbWKpjbpRx0R6Las1jotSexZTj0Hd3fkN5wqA5S%2FTyaT%2FaAb3MasFyiV1U7%2FaHQUBiKONN36F4NCJ2ZjQGeNrziSzNPNkjTLUxEowJWqGyACoEZmPNbH4xLVLsUgu4D%2FtihjjGfB6wFAZeXSs2JwzFQkbwhbzU3B1QrkkqfMb2AfHIc1GwOHnW4NJJcFX5picaH9ByTWkQ%2Fb4f0HeD4I%2Fl2P6HdTQizPtsRxSw%2Bn137HLy6tKMtfRZ9Oy8gEraBKHUl0d2zgN2%2FMxJWrS2zKCTCS9w1SNgLTQ%3D%3D'),(30,'Course 30','Description 30',121,3,'CSE130','passKey30','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/3/photo-1720314772613.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=hBo3VPVNBcjtDmU%2BAdqhUdL3IxGix2XV0v0F8IctkHr%2FHaZNPe7rdP2M%2BSdzeMOejOg0sgpersQK6tQrGIczMgiQgYw76%2BBEW2XtfzNGxhZlBkYz7PJxOzfYGyYpQ66fEIwI6pI6QBVRk%2Btv4M4BxtV9G%2Fp3UdIieTdsuon9aU0InGS11OIz4u5quiV6Xvu3vA3%2FvOyd0EVD9v9Jmtf8Fz3PNXsXuiaIj1dYKtdaRsgNRv0W41Md2CLqQbX3id%2BvTJFso6veMRnGYc7rNatv2TdYfOA3AAfaF8UrKLcB2eeQ65M78xoSLq%2FEQE0MWjtJZB9JUfexqCR7%2Bk09MeU2Ew%3D%3D'),(31,'Course 31','Description 31',121,3,'CSE131','passKey31','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/3/photo-1720314772613.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=hBo3VPVNBcjtDmU%2BAdqhUdL3IxGix2XV0v0F8IctkHr%2FHaZNPe7rdP2M%2BSdzeMOejOg0sgpersQK6tQrGIczMgiQgYw76%2BBEW2XtfzNGxhZlBkYz7PJxOzfYGyYpQ66fEIwI6pI6QBVRk%2Btv4M4BxtV9G%2Fp3UdIieTdsuon9aU0InGS11OIz4u5quiV6Xvu3vA3%2FvOyd0EVD9v9Jmtf8Fz3PNXsXuiaIj1dYKtdaRsgNRv0W41Md2CLqQbX3id%2BvTJFso6veMRnGYc7rNatv2TdYfOA3AAfaF8UrKLcB2eeQ65M78xoSLq%2FEQE0MWjtJZB9JUfexqCR7%2Bk09MeU2Ew%3D%3D'),(32,'Course 32','Description 32',121,3,'CSE132','passKey32','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/3/photo-1720314772613.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=hBo3VPVNBcjtDmU%2BAdqhUdL3IxGix2XV0v0F8IctkHr%2FHaZNPe7rdP2M%2BSdzeMOejOg0sgpersQK6tQrGIczMgiQgYw76%2BBEW2XtfzNGxhZlBkYz7PJxOzfYGyYpQ66fEIwI6pI6QBVRk%2Btv4M4BxtV9G%2Fp3UdIieTdsuon9aU0InGS11OIz4u5quiV6Xvu3vA3%2FvOyd0EVD9v9Jmtf8Fz3PNXsXuiaIj1dYKtdaRsgNRv0W41Md2CLqQbX3id%2BvTJFso6veMRnGYc7rNatv2TdYfOA3AAfaF8UrKLcB2eeQ65M78xoSLq%2FEQE0MWjtJZB9JUfexqCR7%2Bk09MeU2Ew%3D%3D'),(33,'Course 33','Description 33',121,3,'CSE133','passKey33','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/2/photo-1720314739417.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=gkUi3oI0kKOiEPkgzIvE8LnydwHuxuV5Yj5s6%2FHzca0oWisUVOpmwQbWKpjbpRx0R6Las1jotSexZTj0Hd3fkN5wqA5S%2FTyaT%2FaAb3MasFyiV1U7%2FaHQUBiKONN36F4NCJ2ZjQGeNrziSzNPNkjTLUxEowJWqGyACoEZmPNbH4xLVLsUgu4D%2FtihjjGfB6wFAZeXSs2JwzFQkbwhbzU3B1QrkkqfMb2AfHIc1GwOHnW4NJJcFX5picaH9ByTWkQ%2Fb4f0HeD4I%2Fl2P6HdTQizPtsRxSw%2Bn137HLy6tKMtfRZ9Oy8gEraBKHUl0d2zgN2%2FMxJWrS2zKCTCS9w1SNgLTQ%3D%3D'),(34,'Course 34','Description 34',121,3,'CSE134','passKey34','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/3/photo-1720314772613.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=hBo3VPVNBcjtDmU%2BAdqhUdL3IxGix2XV0v0F8IctkHr%2FHaZNPe7rdP2M%2BSdzeMOejOg0sgpersQK6tQrGIczMgiQgYw76%2BBEW2XtfzNGxhZlBkYz7PJxOzfYGyYpQ66fEIwI6pI6QBVRk%2Btv4M4BxtV9G%2Fp3UdIieTdsuon9aU0InGS11OIz4u5quiV6Xvu3vA3%2FvOyd0EVD9v9Jmtf8Fz3PNXsXuiaIj1dYKtdaRsgNRv0W41Md2CLqQbX3id%2BvTJFso6veMRnGYc7rNatv2TdYfOA3AAfaF8UrKLcB2eeQ65M78xoSLq%2FEQE0MWjtJZB9JUfexqCR7%2Bk09MeU2Ew%3D%3D'),(35,'Course 35','Description 35',121,3,'CSE135','passKey35','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/2/photo-1720314739417.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=gkUi3oI0kKOiEPkgzIvE8LnydwHuxuV5Yj5s6%2FHzca0oWisUVOpmwQbWKpjbpRx0R6Las1jotSexZTj0Hd3fkN5wqA5S%2FTyaT%2FaAb3MasFyiV1U7%2FaHQUBiKONN36F4NCJ2ZjQGeNrziSzNPNkjTLUxEowJWqGyACoEZmPNbH4xLVLsUgu4D%2FtihjjGfB6wFAZeXSs2JwzFQkbwhbzU3B1QrkkqfMb2AfHIc1GwOHnW4NJJcFX5picaH9ByTWkQ%2Fb4f0HeD4I%2Fl2P6HdTQizPtsRxSw%2Bn137HLy6tKMtfRZ9Oy8gEraBKHUl0d2zgN2%2FMxJWrS2zKCTCS9w1SNgLTQ%3D%3D'),(36,'Course 36','Description 36',121,3,'CSE136','passKey36','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/3/photo-1720314772613.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=hBo3VPVNBcjtDmU%2BAdqhUdL3IxGix2XV0v0F8IctkHr%2FHaZNPe7rdP2M%2BSdzeMOejOg0sgpersQK6tQrGIczMgiQgYw76%2BBEW2XtfzNGxhZlBkYz7PJxOzfYGyYpQ66fEIwI6pI6QBVRk%2Btv4M4BxtV9G%2Fp3UdIieTdsuon9aU0InGS11OIz4u5quiV6Xvu3vA3%2FvOyd0EVD9v9Jmtf8Fz3PNXsXuiaIj1dYKtdaRsgNRv0W41Md2CLqQbX3id%2BvTJFso6veMRnGYc7rNatv2TdYfOA3AAfaF8UrKLcB2eeQ65M78xoSLq%2FEQE0MWjtJZB9JUfexqCR7%2Bk09MeU2Ew%3D%3D'),(37,'Course 37','Description 37',121,3,'CSE137','passKey37','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/2/photo-1720314739417.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=gkUi3oI0kKOiEPkgzIvE8LnydwHuxuV5Yj5s6%2FHzca0oWisUVOpmwQbWKpjbpRx0R6Las1jotSexZTj0Hd3fkN5wqA5S%2FTyaT%2FaAb3MasFyiV1U7%2FaHQUBiKONN36F4NCJ2ZjQGeNrziSzNPNkjTLUxEowJWqGyACoEZmPNbH4xLVLsUgu4D%2FtihjjGfB6wFAZeXSs2JwzFQkbwhbzU3B1QrkkqfMb2AfHIc1GwOHnW4NJJcFX5picaH9ByTWkQ%2Fb4f0HeD4I%2Fl2P6HdTQizPtsRxSw%2Bn137HLy6tKMtfRZ9Oy8gEraBKHUl0d2zgN2%2FMxJWrS2zKCTCS9w1SNgLTQ%3D%3D'),(38,'Course 38','Description 38',121,3,'CSE138','passKey38','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/4/photo-1720314810192.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=Gece251YqHg5U5bzwFhbHYixZA8PitI%2B1TiE1ScLph6UxOerP%2BwmxYkkW6vrWp%2FqoZfhHzMMQwucOtEpEoVdiCV1CYRsuvAm0yidDD7uz8CBKrKWJIf1pz%2B4vKxzd%2FSp%2FT2pVzA%2BN1fo4OSH%2Br7CUS5TjS1U0ilcod2si2prmfY3uvNmeKO%2FGFrJCnRXomxXhSQq%2FItAcp%2BFCVT5Tt7PDbxE2QTOW6wX3Ejaxg0DXV3P6serR6VYuXTapHI9QAhtMaJeWl8WZL0Ww2dK0an2R0GAPbQNMkaSlnCGwGkxHggt%2FX3TqsUo02JPOfqK8IVkO1zD0Azu4dVVDgeEgC3MDQ%3D%3D'),(39,'Course 39','Description 39',121,3,'CSE139','passKey39','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/2/photo-1720314739417.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=gkUi3oI0kKOiEPkgzIvE8LnydwHuxuV5Yj5s6%2FHzca0oWisUVOpmwQbWKpjbpRx0R6Las1jotSexZTj0Hd3fkN5wqA5S%2FTyaT%2FaAb3MasFyiV1U7%2FaHQUBiKONN36F4NCJ2ZjQGeNrziSzNPNkjTLUxEowJWqGyACoEZmPNbH4xLVLsUgu4D%2FtihjjGfB6wFAZeXSs2JwzFQkbwhbzU3B1QrkkqfMb2AfHIc1GwOHnW4NJJcFX5picaH9ByTWkQ%2Fb4f0HeD4I%2Fl2P6HdTQizPtsRxSw%2Bn137HLy6tKMtfRZ9Oy8gEraBKHUl0d2zgN2%2FMxJWrS2zKCTCS9w1SNgLTQ%3D%3D'),(40,'Course 40','Description 40',121,3,'CSE140','passKey40','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/2/photo-1720314739417.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=gkUi3oI0kKOiEPkgzIvE8LnydwHuxuV5Yj5s6%2FHzca0oWisUVOpmwQbWKpjbpRx0R6Las1jotSexZTj0Hd3fkN5wqA5S%2FTyaT%2FaAb3MasFyiV1U7%2FaHQUBiKONN36F4NCJ2ZjQGeNrziSzNPNkjTLUxEowJWqGyACoEZmPNbH4xLVLsUgu4D%2FtihjjGfB6wFAZeXSs2JwzFQkbwhbzU3B1QrkkqfMb2AfHIc1GwOHnW4NJJcFX5picaH9ByTWkQ%2Fb4f0HeD4I%2Fl2P6HdTQizPtsRxSw%2Bn137HLy6tKMtfRZ9Oy8gEraBKHUl0d2zgN2%2FMxJWrS2zKCTCS9w1SNgLTQ%3D%3D'),(47,'Data structure','This is Data Structure Course',121,4,'CSE 141','passKey41','https://storage.googleapis.com/unihub-fd4e0.appspot.com/coursePhotos/47/photo-1720326260407.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=b90hFI5fvb1WIsFuAf8bypwbI6uyLiXffESSPukxsly%2Bz9IfFReQJkyWTyXnmneU4KhPXsTlIcZQO3Tn%2BDnhYANx9Qm3RgygN9L4ySwsuISxQYWGHIjTv%2FN5QJ7GQ%2FuwF7t5nNlH1eMbvQKDZRFOsLbU6ETwLdKWyRR1bO48%2FTpLKHQ6XSoOLPs51XZ5YTwC3KsmUjFXg6x44iQE6kOM%2BApuu9citpBwGfDT2QvpYvbYWFZBZsmijEGfBLDDk6%2FOTGV0XCFid%2BzB462Xvk9WYEZjSupyhOWr%2F2t2wCCR8PT%2FvYhuESwkFP1P65uGMHBT3e7qk0UK3XzsSf6mYiNrsw%3D%3D');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-07  9:26:29
