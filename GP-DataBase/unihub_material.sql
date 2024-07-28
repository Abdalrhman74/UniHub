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
-- Table structure for table `material`
--

DROP TABLE IF EXISTS `material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `material` (
  `materialId` int NOT NULL AUTO_INCREMENT,
  `link` text,
  `materialName` varchar(50) DEFAULT NULL,
  `materialDesc` text,
  `uploadDate` datetime DEFAULT NULL,
  `courseId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`materialId`),
  KEY `courseId` (`courseId`),
  KEY `userId` (`userId`),
  CONSTRAINT `material_ibfk_1` FOREIGN KEY (`courseId`) REFERENCES `course` (`courseID`),
  CONSTRAINT `material_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material`
--

LOCK TABLES `material` WRITE;
/*!40000 ALTER TABLE `material` DISABLE KEYS */;
INSERT INTO `material` VALUES (28,'https://storage.googleapis.com/unihub-fd4e0.appspot.com/materials/21/file-1720033893237.docx?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=RZMawZhS6hOzmU7tPI1X7dvz%2FanRiv4k85oFzEvki8UKFz0zNlaqb2iCFwOS94iPXcXniCqpEfdYDUJZBRQIlnY6A5b%2FoQ2LDjQshi51J6azNnRyqmfa9aDw8suD4ctkU6wnB3AGXv2yhuZTI%2FUqrFGWMByRyXggjxSVR0eQ9H4xO2kQi%2FYcYk5It0KOAHI2POEZxgmo4iOog%2Fhu9ZA52Nvux4DOVWQLLKL1f4BFL5%2Fy3GBXsARY39jhoVBeZFkiDIg2P1dIxYaYz3NeJs0rdtTqAQjlQ0cN8N0FV7aKuOnhaAm7Z40a387%2FwAtGdIynDGFekAk36NeHU1nZYfG4zw%3D%3D','hamdto','lecture1 Pdf','2024-07-03 22:11:40',21,121),(29,'https://storage.googleapis.com/unihub-fd4e0.appspot.com/materials/21/file-1720034006490.mp4?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=T28oC6RfV42%2BbvnR8s%2BJKI8F1EDcJs%2BLkCg%2BS0sgEeCZAupsimkInBvHNsC3FHAzXNUei4GPs4v2RfoEmN6AdJSvlXojfs%2FqHvLvGgV%2FB4xVRd2YtQjdbxOgNK3xs3AIFBQTBbOPUOFGT%2FXH3kMOAB0bRH0dE127ah6Pc32d4OONEU80q0l2iPxxhcZrBZcKRzLPCmw6TEyAAK8Xfi3UyrS5wL9Q%2BoANWehiWfxrImTRrwIQXC42NRfOGFgf6bXcX%2F%2FC51MXJXBGH7n3ACwhf%2BOrEb%2Bg0H09GbrPI3XprC%2BNd4JiqmVNlz218o1JaQCjbkeRtqMSYTFu35c1gAB8Bw%3D%3D','hamdto','Lecture 1 Video','2024-07-03 22:15:06',21,121),(30,'https://storage.googleapis.com/unihub-fd4e0.appspot.com/materials/21/file-1720034089663.mp4?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=et67St0eAodPz4XGQP%2Bf%2FxYBT4xfRo%2FHjqfPGokTzSR%2BcSQfzd%2F5E8ue40Cwz3zEknlBY3hXsotFcn4OtlezO%2FbICncpbj%2BV2Rn9%2BxT0nAyrl29Lnq%2F9ai%2FrT7Lac3Aa9IM3gpL5EEv%2FpxU0WJIG%2FGwblElDwR%2Fcg5S8TafLFrJXxbAFtTSieujhddCOFypY6GfnxHdA2b8e73WMe%2BdvBSUsaLz7NqL28VIJwSDlHcQPRxlmDOWb%2BeyQh0%2BicmE%2FYoFyj%2BSYNrRybq8B75Oa9SHbfzqUYHUOoNr1tNuFBKok2dwKMu%2FqxN%2BMvMu5qdWTYjt2Y4dKpTEfjR96kGhjmg%3D%3D','hamdto','Lecture 1 video','2024-07-03 22:17:05',21,121),(31,'https://storage.googleapis.com/unihub-fd4e0.appspot.com/materials/21/file-1720034314906.pdf?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=OukkpVNTTsSw3lMcEeXP5TVMtNkD6T7fhk4xb8jaGCha0JA2H%2FpeTjqz%2B0HRUyvc6q7RxcopjKhZ%2Be7R5Ui6knOr9Dr12z6mmaukXf2cE11Ihw%2B3AWkc6o4VFTTk2bKqaLR%2Fvsy5OeIgIcC2mImeuVdCySdeu53DRJPXvQCVBfUT4QNHtnc0%2FTUTYDnloW7akBLSQTbE7PO8T2wa2a%2BiUomUq4C%2BFsiQxqcHC6%2FgfI1HDQhLxxt%2BiZbM3PwQ1ARz9aKaUv1wI3Uk13Cb3MvAi9Ts8PACDTOg0A%2BIQtZEZqBwu1HZ0bkHvk%2Fvu8Z%2BI3h9OXZqPbE15LqUC0OZNSLx0A%3D%3D','PDF','PDF','2024-07-03 22:18:36',21,121),(32,'https://storage.googleapis.com/unihub-fd4e0.appspot.com/materials/21/file-1720034362072.jpg?GoogleAccessId=firebase-adminsdk-w5r6m%40unihub-fd4e0.iam.gserviceaccount.com&Expires=16447010400&Signature=YhRRCazP4A4MiPl4H29sZV59g0mlLxS0gyA0DjrCuz1a1vp9mPzAbTxWck12pMhdSWkg7yOUqwyro9fzuLo2PJp%2B78Jino3eGx1wCjVvJNZih5KP2KSkPihUxMLF2enCQPmgbMm%2FoMTd6ClwetnErcDnEgFy0urhx0ySzB%2FUZDl%2BK2%2FLYaD3ACILEhHEJ3rtYUnhrjq72yjkPWDm8Bx9CgHLuj8A1x52UsGCbi9GWNHOYS0a5z5ZsMzeaQXo%2BE4%2FGVm65P2jaDsTLyJw%2Fl8Rgp4XWVx8AW%2F46mqayCvIJKOljRytlcgsrUn5fRElQX%2BSZSaC90b8GC6x%2F70NEhrQIw%3D%3D','hamdto','photo','2024-07-03 22:19:23',21,121);
/*!40000 ALTER TABLE `material` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-07  9:26:30
