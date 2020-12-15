-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 14/12/2020 às 20:32
-- Versão do servidor: 5.7.23-23
-- Versão do PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `clicou84_checkout_justfit`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `identificacao_checkout`
--

CREATE TABLE `identificacao_checkout` (
  `ID_checkout` int(11) NOT NULL,
  `nomecompleto` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `cpf` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `data_nasc` date NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `sexo` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `celular` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `unidade` varchar(80) COLLATE utf8_unicode_ci NOT NULL,
  `plano` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `optPhone` tinyint(1) DEFAULT NULL,
  `optEmail` tinyint(1) DEFAULT NULL,
  `finalizadoVenda` tinyint(1) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Despejando dados para a tabela `identificacao_checkout`
--

INSERT INTO `identificacao_checkout` (`ID_checkout`, `nomecompleto`, `cpf`, `data_nasc`, `email`, `sexo`, `celular`, `unidade`, `plano`, `optPhone`, `optEmail`, `finalizadoVenda`, `createAt`, `updateAt`) VALUES
(10, 'Gabriel Dos Santos', '469.105.778-17', '1994-09-10', 'gabriel@pamajhon.com.br', 'M', '(11) 98267-7393', 'SHOPPING LIGHT', 'JUST - MAT. 0 PRIM. 29,90 MENS. 89,90', 1, 1, 1, '2020-12-11 22:24:25', '2020-12-14 20:42:25'),
(11, 'Teste', '612.065.420-80', '2000-01-01', 'teste1@teste.com.br', 'M', '(11) 98888-8888', 'PARAISO', 'FIT PLUS - MAT 0 E PRIM 14,90 E MENS. R$99,90', 1, 1, 0, '2020-12-11 22:57:22', '2020-12-11 22:57:30'),
(12, '', '', '1969-12-31', '', 'M', '', 'MARILIA', 'JUST - MAT. 0 PRIM. 29,90 MENS. 89,90', 1, 1, 0, '2020-12-12 00:04:21', '2020-12-14 11:48:24'),
(13, 'GUILHERME RIBEIRO', '400.794.238-25', '1993-02-22', 'ribeiro-guilherme@outlook.com', 'M', '(11)96085-6066', 'MARILIA', 'FIT PLUS - MAT 0 E PRIM 14,90 E MENS. R$99,90', 1, 1, 1, '2020-12-14 12:13:57', '2020-12-14 12:17:36');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `identificacao_checkout`
--
ALTER TABLE `identificacao_checkout`
  ADD PRIMARY KEY (`ID_checkout`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `identificacao_checkout`
--
ALTER TABLE `identificacao_checkout`
  MODIFY `ID_checkout` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
