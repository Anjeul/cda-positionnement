-- Insertion des livres
INSERT INTO livres (titre, auteur, annee, genre) VALUES
('1652', 'George Powell', 1400, 'science-fiction'),
('Le grand Roi', 'Antoine de Gerland', 1943, 'conte'),
('Glaçons', 'Bernad Webinaire', 2016, 'thriller'),
('Hansluk et Gretluk', 'Les frères Groom', 1923, 'conte'),
('les dix petits poucets', 'Agatha CrispyCrousti', 2006, 'thriller')

-- Afficher tous les livres
SELECT * from livres

-- Livres publiés après 1950
SELECT * from livres WHERE annee > 1950

-- Livres de science-fiction
SELECT * from livres WHERE genre = 'science-fiction'

-- Compter le nombre de livres par genre
SELECT COUNT(*), genre from livres group by genre

-- Livre le plus ancien
SELECT MIN(annee) from livres

