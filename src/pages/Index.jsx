import { Container, Input, Button, VStack, Box, Text, Link, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

const skiResorts = [
  { name: "Åre", location: "Jämtland", url: "https://www.skistar.com/en/Are/" },
  { name: "Sälen", location: "Dalarna", url: "https://www.skistar.com/en/Salen/" },
  { name: "Vemdalen", location: "Jämtland", url: "https://www.skistar.com/en/Vemdalen/" },
  { name: "Trysil", location: "Norway", url: "https://www.skistar.com/en/Trysil/" }
];

const Index = () => {
  const [search, setSearch] = useState("");
  const [filteredResorts, setFilteredResorts] = useState(skiResorts);

  const handleSearch = () => {
    const filtered = skiResorts.filter(resort =>
      resort.name.toLowerCase().includes(search.toLowerCase()) ||
      resort.location.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredResorts(filtered);
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Text fontSize="4xl" fontWeight="bold">Find Ski Resorts in Sweden</Text>
        <Box>
          <Input
            placeholder="Search by name or location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            size="lg"
            width="auto"
            mr={2}
          />
          <Button onClick={handleSearch} colorScheme="blue" size="lg">Search</Button>
        </Box>
        <SimpleGrid columns={2} spacing={10}>
          {filteredResorts.map((resort, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px">
              <Text fontSize="xl" fontWeight="bold">{resort.name}</Text>
              <Text>{resort.location}</Text>
              <Link href={resort.url} isExternal color="teal.500">Visit Website</Link>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;